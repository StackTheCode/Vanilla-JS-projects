/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav_menu'),
  navClose = document.querySelector('.nav_close'),
  navToggle = document.querySelector('.nav_toggle'),
  header = document.querySelector('header');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav_link');

const closeMenu = () => {
  const navMenu = document.querySelector('.nav_menu');
  navMenu.classList.remove('show-menu')
}

navLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
})



/*=============== SWIPER SHOE ===============*/
let swiperShoes = new Swiper('.home_swiper', {
  // Optional parameters

  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  effect: 'creative',
  creativeEffect: {
    prev: {
      translate: [-100, 0 - 500],
      opacity: 0
    }
  },
  next: {
    translate: [100, 0 - 500],
    opacity: 0
  },
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },




});

/*=============== SHADOW HEADER ===============*/
const scrollHeader =()=>{
this.scrollY >=50 ? header.classList.add('scroll-header'):header.classList.remove('scroll-header');

}
window.addEventListener('scroll',scrollHeader)