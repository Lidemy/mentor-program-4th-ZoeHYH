document.querySelector('input[id = "task"]').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
        let li = document.createElement('li');
        li.classList.add('task');
        li.innerHTML= `
            <i class="material-icons done">check_box_outline_blank</i>
            <p>${escapeHtml(e.target.value)}</p>
            <i class="material-icons delete">delete</i>
        `
        e.target.parentNode.after(li);
        e.target.value = '';
    }
})

document.querySelector('.todo').addEventListener('click', (e) => {
    if (e.target.classList.contains('done')) {
        e.target.parentNode.classList.toggle('finished');
        if (e.target.parentNode.classList.contains('finished')) {
            e.target.innerText = 'check_box';
        } else {
            e.target.innerText = 'check_box_outline_blank';
        }
    }
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
})

function escapeHtml(content) {
    return content
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}
