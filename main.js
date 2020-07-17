'use strict';


const navbar = document.querySelector('#navbar');
//navbar의 높이
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

  // console.log(window.scrollY);
  // console.log(`높이 : ${navbarHeight}`);

  //scroll 좌표값을 알려줌
  if (window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
})