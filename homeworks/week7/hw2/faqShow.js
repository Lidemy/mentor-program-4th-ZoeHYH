document.querySelector('.faq ul').addEventListener('click', e => {
    let li = e.target.closest('.faq_item');
    let p = li.querySelector('.faq_a');
    p.classList.toggle('show');
})