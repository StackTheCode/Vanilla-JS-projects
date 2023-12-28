/*=============== SEARCH ===============*/
const searchIcon = document.querySelector('.search_icon'),
  search = document.querySelector('.search'),
  searchClose = document.querySelector('.search_close');

if (searchIcon) {
  searchIcon.addEventListener('click', () => {
    search.classList.add('show-search');
  })
}
if (searchClose) {
  searchClose.addEventListener('click', () => {
    search.classList.remove('show-search');
  })
}
/*=============== LOGIN ===============*/
const login = document.querySelector('.login'),
  usericon = document.querySelector('.user_icon');
loginClose = document.querySelector('.login_close');


if (usericon) {
  usericon.addEventListener('click', () => {
    login.classList.add('show-login');
  })
}



if (loginClose) {
  loginClose.addEventListener('click', () => {
    login.classList.remove('show-login');
  })
}

/*=============== ADD SHADOW HEADER ===============*/
const scrollHeader = () => {
  const header = document.querySelector('header');
  this.scrollY >= 50 ? header.classList.add('scroll-header') : header.classList.remove('scroll-header')
}

/*=============== HOME SWIPER ===============*/

let swiperHome = new Swiper('.home_swiper', {


  loop: true,
  grabCursor: true,
  spaceBetween: -24,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    }
  }

  // If we need pagination

});
/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured_swiper', {


  loop: true,
  grabCursor: true,
  spaceBetween: -24,
  slidesPerView: 'auto',
  centeredSlides: 'auto',

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false
    }
  }


  // If we need pagination

});

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new_swiper', {


  loop: true,

  spaceBetween: 16,
  slidesPerView: 'auto',



  breakpoints: {
    1150: {
      slidesPerView: 3,

    }
  }


  // If we need pagination

});

/*=============== TESTIMONIAL SWIPER ===============*/

let swiperTestimonial = new Swiper('.testimonial_swiper', {


  loop: true,
  grabCursor: true,
  spaceBetween: 16,
  slidesPerView: 'auto',
  centeredSlides: 'auto',



  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false
    }
  }


  // If we need pagination

});
/*=============== SHOW SCROLL UP ===============*/
const scrollup = document.querySelector('.scrollup');


const ScrollUp = () => {
  this.scrollY >= 300 ? scrollup.classList.add('show-scrollup') :
    scrollup.classList.remove('show-scrollup')
}
window.addEventListener('scroll', ScrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id'),
      sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionClass.classList.add('active-link')
    }
    else {
      sectionClass.classList.remove('active-link')
    }

  })
}
window.addEventListener('scroll', scrollActive)
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.querySelector('.theme_icon'),
  darkTheme = 'dark-theme',
  iconTheme = 'ri-sun-line';





const selectedTheme = localStorage.getItem('selected-theme');

const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'



if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme)
  document.body.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset:true
})

sr.reveal(`.home_data, .featured__container, .new__container,.join__container`);
sr.reveal(`.home_images ,.testimonial_card,`, { delay: 600 });
sr.reveal(`.services__container, .discount__container`, { origin: 'left', delay: 900 });
sr.reveal(`.join_data`, { origin: 'right' });
