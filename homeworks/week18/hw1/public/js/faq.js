document.querySelector('.faq ul').addEventListener('click', (e) => {
  const li = e.target.closest('.faq_item');
  const p = li.querySelector('.faq_a');
  p.classList.toggle('show');
});
