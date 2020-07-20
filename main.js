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
  navbarMenu.classList.remove('open');
  console.log(event.target.dataset.link);
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });

})

// navbar 작은 화면에서 햄버거 메뉴 토글링

const navbarToggleBtn = document.querySelector('.navbar__togglebtn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('open');

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

//home 전체가 아닌 그 안의 컨텐츠만 투명해지게
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
})


//맨위로 버튼만들기

const upBtn = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    upBtn.classList.add('visible');
  } else {
    upBtn.classList.remove('visible');
  }
})

//맨위 버튼 클릭 시 최상단으로 이동

upBtn.addEventListener('click', () => {
  const scrollTop = document.querySelector('#home');
  scrollTop.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });

})


//  Projects

const workContainer = document.querySelector('.work__category');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');





workContainer.addEventListener('click', (e) => {
  //span 태그의 숫자를 클릭하더라도 parentNode의 dataset 으로 올라가 데이터 가져올 수 있음
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  // 선택한 버튼에만 색 입혀지도록 하는 기능 ( 이전 거는 삭제)
  const selected = document.querySelector(".category__btn.selected");
  selected.classList.remove('selected');

  //클릭했을때 selected 클래스 생성
  e.target.classList.add('selected');



  //투명상태에서 클릭 시올라오는 애니메이션 삽입
  projectContainer.classList.add('anime-out');


  setTimeout(() => {
    for (let project of projects) {
      //filter에 해당 된다면 보여지고
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove('invisible');
      } else {
        //filter에 해당되지않는다면 안보여지도록  
        project.classList.add('invisible');
      }
    }
    projectContainer.classList.remove('anime-out');
  }, 300)
})