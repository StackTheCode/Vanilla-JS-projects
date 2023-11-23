/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('.nav_menu'),
    navClose = document.querySelector('.nav_close'),
    navToggle = document.querySelector('.nav_toggle');

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
const links = document.querySelectorAll('.nav_link');

function hideMenu() {
    navMenu.classList.remove('show-menu');
}


links.forEach(link => {
    link.addEventListener('click', hideMenu);
})

/*=============== ADD BLUR HEADER ===============*/
const header = document.querySelector('header');
function addBlur() {
    this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}

window.addEventListener('scroll', addBlur)

/*=============== SWIPER FAVORITES ===============*/

let swiperFavourite = new Swiper('.favourite_swiper', {

    loop: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        768: {
            slidesPerView: 3,
        }
    }
});
/*=============== SHOW SCROLL UP ===============*/
const scrollup = document.querySelector('.scrollup')

window.addEventListener('scroll', () => {
    this.scrollY >= 150 ? scrollup.classList.add('show-scrollup') : scrollup.classList.remove('show-scrollup')
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');

const activeLinks = () => {

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
window.addEventListener('scroll', activeLinks)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal(`.model__container, .favourite__container, .footer__container, .sponsor__container `);
sr.reveal(`.home_title span:nth-child(1)`, { origin: 'right', opacity: 1, interval: 2000 });
sr.reveal(`.home_title span:nth-child(3)`, { origin: 'left', opacity: 1, interval: 2000 });
sr.reveal(`.about_data `, { origin: 'left', opacity: 1, });
sr.reveal(`.about_img `, { origin: 'right', opacity: 1, });
sr.reveal(`.home__container`, { origin: 'left', opacity: 1, });


