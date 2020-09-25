export function boardTemp(form_class, comments_class, btn_load_class) {
    return `
        <div>
            <form class="${form_class} mb-3">
                <div class="form-group">
                    <label for="nickname">暱稱</label>
                    <input class="form-control" type="text" name="nickname">
                </div>
                <div class="form-group">
                    <label for="content">留言內容</label>
                    <textarea class="form-control" name="content" rows="10"></textarea>
                </div>
                <button class="btn btn-primary" type="submit">送出</button>
            </form>
            <div class="${comments_class}">
            </div>
            <button class="${btn_load_class} btn btn-outline-primary" type="button">載入更多</button>
        </div>`
}
