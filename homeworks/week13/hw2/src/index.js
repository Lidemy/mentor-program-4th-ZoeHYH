import {getComment, postComment} from './api';
import {appendCommentToDOM} from './utils';
import {boardTemp} from './template';
import $ from 'jquery';

export function init(options) {
    let site_key = options.site_key;
    let api_url = options.api_url;
    let container_elem = $(options.container);
    let limit = options.limit;
    let offset = 0;

    let form_class = `${site_key}-form`;
    let comments_class = `${site_key}-comments`;
    let btn_load_class = `${site_key}-btn-load`;
    let form_selector = `.${form_class}`;
    let comments_selector = `.${comments_class}`;
    let btn_load_selector = `.${btn_load_class}`;

    container_elem.append(boardTemp(form_class, comments_class, btn_load_class));

    function showComment(offset, limit, api) {
        api(api_url, site_key, limit, offset, data => {
            if(!data.ok) {
                alert(data.message);
                return;
            }
            const comments = data.discussions;
            for (let comment of comments) {
                appendCommentToDOM($(comments_selector), comment);
            }
            if (comments.length < 5) {
                $(btn_load_selector).remove();
            }
        });
    }
    
    function showNewComment(api) {
        let nickname_selector = `${form_selector} input[name=nickname]`; 
        let content_selector = `${form_selector} textarea[name=content]`; 
        const newInput = {
            site_key,
            nickname: $(nickname_selector).val(),
            content: $(content_selector).val(),
        };
        api(api_url, newInput, data => {
            if(!data.ok) {
                alert(data.message);
                return;
            }
            appendCommentToDOM($(comments_selector), newInput, true);
            $(nickname_selector).val('');
            $(content_selector).val('');
        });
    }
    
    showComment(offset, limit, getComment);
    $(btn_load_selector).click(e => {
        offset += limit;
        showComment(offset, limit, getComment);
    })

    $(form_selector).submit(e => {
        showNewComment(postComment);
        offset++;
    })
}
