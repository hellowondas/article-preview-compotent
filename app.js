const social = document.querySelector('.card-author');

const icon = document.querySelector('.icon');


icon.addEventListener('click', () => {
  icon.classList.toggle('active');
  social.classList.toggle('active');
})

