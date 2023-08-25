let navMain = document.querySelector('.main-nav');
let navList = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.main-header__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navList.classList.contains('main-nav__list--closed')) {
    navList.classList.remove('main-nav__list--closed');
    navList.classList.add('main-nav__list--opened');
    navToggle.classList.add('main-header__toggle--opened');
  } else {
    navList.classList.add('main-nav__list--closed');
    navList.classList.remove('main-nav__list--opened');
    navToggle.classList.remove('main-header__toggle--opened');
  }
});
