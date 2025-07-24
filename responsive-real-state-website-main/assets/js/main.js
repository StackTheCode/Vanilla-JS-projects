/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('header');
function scrollHeader() {
  this.scrollY >= 50 ? header.classList.add('scroll-header') :
    header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)
/*=============== SWIPER POPULAR ===============*/
const swiper = new Swiper('.popular__container', {
  // Optional parameters
  spaceBetween: 32,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 'auto',





  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },


});

/*=============== VALUE ACCORDION ===============*/
const accordionItems = document.querySelectorAll('.value_accordion-item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.value_accordion-header');
  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);

    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  })
})

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.value_accordion-content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open')
  }
  else {

    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }


}

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute('id');
    const navLink = document.querySelector('.nav_menu a[href="#' + sectionId + '"]');

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);
/*=============== SHOW SCROLL UP ===============*/
const scrollup = document.querySelector('.scrollup');


function scrollTop() {
  this.scrollY >= 350 ? scrollup.classList.add('show-scroll') :
    scrollup.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollTop)

/*=============== DARK LIGHT THEME ===============*/


const themeBtn = document.getElementById('theme-btn'),
  darkTheme = 'dark-theme',
  iconTheme = 'ri-sun-line';


const selectedTheme = localStorage.getItem('selected-item');
const selectedIcon = localStorage.getItem('selected-icon');


const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';



if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  themeBtn.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);

}
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);

  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
