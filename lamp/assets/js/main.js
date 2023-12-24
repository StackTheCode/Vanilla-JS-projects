/*=============== SHOW MENU ===============*/
const NavMenu = document.querySelector(".nav__menu");
const NavToggle = document.querySelector(".nav_toggle");
const NavClose = document.querySelector(".nav_close");
if (NavToggle) {
    NavToggle.addEventListener("click", () => {
        NavMenu.classList.add('show-menu')
    })
}

if (NavClose) {
    NavClose.addEventListener("click", () => {
        NavMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const NavLink = document.querySelectorAll(".nav_link");



const LinkAction = () => {
    NavMenu.classList.remove("show-menu")
}
NavLink.forEach((e) => {
    e.addEventListener("click", LinkAction)
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const header = document.querySelector('header');
const ChangeHeader = () => {
    this.scrollY >= 50 ? header.classList.add("bg_header") :
        header.classList.remove("bg_header");
}
window.addEventListener("scroll", ChangeHeader)
/*=============== SWIPER POPULAR ===============*/

const popularSwiper = new Swiper('.popluar_content', {
    // Optional parameters
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,

    // If we need pagination


    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            centeredSlides: false,


        }
    }
});
/*=============== CHOOSE FAQ ===============*/
const FaqITem = document.querySelectorAll(".choose_faq-item");
FaqITem.forEach((item) => {
    const FaqHeader = item.querySelector(".choose_faq-header");

    FaqHeader.addEventListener("click", () => {
        toggleItem(item);
        const openItem = document.querySelector('.faq-open')
        if (openItem && openItem != item) {
            toggleItem(openItem)
        }
    })
})

const toggleItem = (item) => {

    const FaqContent = item.querySelector(".choose_faq-content");

    if (item.classList.contains("faq-open")) {
        FaqContent.removeAttribute("style")
        item.classList.remove('faq-open')
    }
    else {

        FaqContent.style.height = FaqContent.scrollHeight + "px";
        item.classList.add('faq-open')



    }
}

/*=============== SHOW SCROLL UP ===============*/



const ScrollUpShow = () => {
    const scrollup = document.querySelector('.scrollup');
    this.scrollY >= 350 ? scrollup.classList.add("show_scroll")
        : scrollup.classList.remove("show_scroll")
}
window.addEventListener('scroll', ScrollUpShow);
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollY = window.pageYOffset


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        } else {
            sectionsClass.classList.remove('active-link');
        }
    })
}
window.addEventListener('scroll', scrollActive);

/*=============== DARK LIGHT THEME ===============*/
const ThemeButton = document.getElementById('theme-btn');
const DarkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';


const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon')


const getCurrentTheme = () => document.body.classList.contains(DarkTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'ri-moon-line' : ' ri-sun-line';



if (selectedTheme) {

    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](DarkTheme);
    ThemeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

ThemeButton.addEventListener('click', () => {
    document.body.classList.toggle(DarkTheme);
    ThemeButton.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})




const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 2500,
        delay: 400,
        reset: true
    }
)
sr.reveal(`.home_content,.popular__container,.products__container,.join_bg,.footer__container`);
sr.reveal(`.home_image`,  {origin:'bottom'});
sr.reveal(`.choose_image, .feature-image`,  {origin:'left'});
sr.reveal(`.choose_content,.features_content`,  {origin:'right'});
