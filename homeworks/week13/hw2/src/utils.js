export function escape(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export function appendCommentToDOM(DOM, comment, prepend) {
    const html = `
        <div class="card mb-3">
            <div class="card-body">
                <h5 class="card-title">${escape(comment.nickname)}</h5>
                <p class="card-text">${escape(comment.content)}</p>
            </div>
        </div>`;
    if (prepend) {
        DOM.prepend(html);
    } else {
        DOM.append(html);
    }
}