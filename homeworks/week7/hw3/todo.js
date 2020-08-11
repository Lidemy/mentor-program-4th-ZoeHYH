document.querySelector('input[id = "task"]').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.target.value !== '') {
        let li = document.createElement('li');
        li.innerHTML= `
            <button class="done">Done<img src="" alt=""></button>
            <p>${e.target.value}</p>
            <button class="delete">Delete<img src="" alt=""></button>
        `
        e.target.parentNode.after(li);
        e.target.value = '';
    }
})

document.querySelector('.todo').addEventListener('click', (e) => {
    if (e.target.classList.contains('done')) {
        e.target.parentNode.classList.toggle('finished');
    }
    if (e.target.classList.contains('delete')) {
        e.target.parentNode.remove();
    }
})