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


//navbar 메뉴 클릭 시 스크롤 이동
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {

  const target = event.target;
  const link = target.dataset.link;

  if (link == null) {
    return;
  }

  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });

})


//contact 버튼 클릭 시 스크롤 이동

const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {

  const scrollTo = document.querySelector('#contact');
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
})


// 스크롤 시 Home 부분 점점 투명해지게

//navbar 스크롤 위치
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})