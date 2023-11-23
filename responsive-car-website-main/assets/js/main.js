/*=============== SHOW MENU ===============*/

const navMenu = document.querySelector(".nav_menu");
const CloseBtn = document.querySelector(".nav_close");
const ToggleBtn = document.querySelector(".nav_toggle");



if (ToggleBtn) {
    ToggleBtn.addEventListener("click", () => {
        navMenu.classList.add('show-menu');
    })
}


if (CloseBtn) {
    CloseBtn.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav_link")



const CloseMenu = () => {

    const navMenu = document.querySelector(".nav_menu");


    navMenu.classList.remove("show-menu")

}


navLink.forEach(e => e.addEventListener('click', CloseMenu)

);


/*=============== CHANGE BACKGROUND HEADER ===============*/


const ScrollHeader = () => {
    const header = document.querySelector("header");


    this.scrollY >= 50 ? header.classList.add("scroll-header") :
        header.classList.remove('scroll-header')
}


window.addEventListener('click', ScrollHeader)

/*=============== POPULAR SWIPER ===============*/
const swiper = new Swiper('.popular__container', {
    // Optional parameters

    loop: true,
    spacebetween: 24,
    slidesPerView: 'auto',
    grabCursor: true,
    // If we need pagination
    pagination: {

        el: '.swiper-pagination',
        dynamicBullets: true,
    },

    breakpoints: {


        768: {
            slidesPerView: 3,

        },

        1024: {
            spacebetween: 48,

        },


    }



});

/*=============== MIXITUP FILTER FEATURED ===============*/
var mixer = mixitup(".featured_content", {
    selectors: {
        target: '.featured_card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */
const LinkFeatured = document.querySelectorAll('.featured_item');
function activeFeatured() {
    LinkFeatured.forEach(e => e.classList.remove('active-featured'));
    this.classList.add('active-featured')
}
LinkFeatured.forEach(e => e.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/

const scrollup = document.querySelector('.scrollup');


function ShowScrollup() {

    this.scrollY >= 350 ? scrollup.classList.add('show-scroll') :
        scrollup.classList.remove('show-scroll')
}

window.addEventListener("scroll", ShowScrollup)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


const sections = document.querySelectorAll('section[id]')
function ScrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHEight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionID = current.getAttribute('id')


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHEight) {
            document.querySelector('.nav_menu a[href*=' + sectionID + ']').classList.add('active-link')

        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionID + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', ScrollActive);
/*=============== SCROLL REVEAL ANIMATION ===============*/

const Sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset:true
})

Sr.reveal(`.home_title, .popular_title, .features_img,.section_title`,  { delay: 500 });

Sr.reveal(`.home_subtitle`, { delay: 600 })
Sr.reveal(`.home_elec`, { delay: 600 })
Sr.reveal(`.home_img`, { delay: 800 })
Sr.reveal(`.home_car-data`, { delay: 900, interval: 100, origin: 'bottom' })
Sr.reveal(`.home_btn, .footer_content`, {interval:200, delay: 900, origin: 'bottom' })
Sr.reveal(`.about_group`, { origin: 'left' })
Sr.reveal(`.about_data`, { origin: 'right' })
Sr.reveal(`.features_map`, { origin: 'right' })
Sr.reveal(`.features_card, .featured_filters`, { delay: 600, origin: 'top' })
Sr.reveal(`.featured_card,.logos_content`, { interval: 100, delay: 500, origin: 'top' })
Sr.reveal(`.offer_data`, { origin: 'left' })
Sr.reveal(`.offer_img`, { interval: 100, delay: 500, origin: 'top' })


