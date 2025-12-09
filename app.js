const social = document.querySelector('.card-author');

const icon = document.querySelector('.icon');

const share = document.querySelector('.share-option');








// function toggleActive(e) {
//   if (!e.target.className) {
//     e.target.className = "active";
//   } else {
//     e.target.className = "";
//   }
// }


// icon.addEventListener("click", toggleActive)

icon.addEventListener('click', () => {
  icon.classList.toggle('active');
  social.classList.toggle('active');
})

