let faq = document.querySelector('.faq ul')
faq.addEventListener('click', (e) => {
    let p;
    if (e.target.tagName === "LI" || e.target.tagName === "ARTICLE") {
        p = e.target.querySelector('p');
    } else if (e.target.tagName === "SPAN" || e.target.tagName === "H3") {
        p = e.target.parentNode.querySelector('p');
    }
    p.classList.toggle('show');
})