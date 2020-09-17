import $ from 'jquery';

export function getComment(api_url, site_key, limit, offset, cb) {
    $.ajax({
        url: `${api_url}/api_comment.php?site_key=${site_key}&limit=${limit}&offset=${offset}`,
    }).done(data => {
        cb(data);
    });
}

export function postComment(api_url, data, cb) {
    $.ajax({
        type: 'POST',
        url: `${api_url}/api_add_comment.php`,
        data,
    }).done(data => {
        cb(data);
    })
}