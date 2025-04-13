const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');
const openBtn = document.querySelector('.open-menu');
const closeBtn = document.querySelector('.close-menu');

openBtn.addEventListener('click', toggleNavMenu);
closeBtn.addEventListener('click', toggleNavMenu);
overlay.addEventListener('click', toggleNavMenu);

function toggleNavMenu() {
  navMenu.classList.toggle('appear');
  overlay.classList.toggle('appear');
};