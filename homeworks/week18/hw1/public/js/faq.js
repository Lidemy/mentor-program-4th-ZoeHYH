document.querySelector('.faq ul').addEventListener('click', (e) => {
  const faqItem = e.target.closest('.faq_item');
  const answer = faqItem.querySelector('.faq_a');
  answer.classList.toggle('show');
});
