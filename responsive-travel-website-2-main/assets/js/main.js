/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector(".nav_menu");
const navToggle = document.querySelector(".nav_toggle");
const navClose = document.querySelector(".nav_close");



if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll(".nav_link");






const LinkAction = () => {
    const navMenu = document.querySelector(".nav_menu");


    navMenu.classList.remove("show-menu");

}


navLink.forEach(e => e.addEventListener("click", LinkAction));


/*=============== ADD BLUR TO HEADER ===============*/
const scrollHeader = () => {
    const header = document.querySelector(".header");



    this.scrollY >= 50 ? header.classList.add("scroll-header")
        : header.classList.remove("scroll-header")
}


window.addEventListener("scroll", scrollHeader)
/*=============== SHOW SCROLL UP ===============*/
const scrollup = document.querySelector(".scrollup");


const ShowScrollup = () => {
    this.scrollY >= 350 ? scrollup.classList.add("show-scrollup")
        : scrollup.classList.remove("show-scrollup")
}


window.addEventListener("scroll", ShowScrollup);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");


const ScrollActive = () => {
    const scrollY = window.pageYOffset;


    sections.forEach(current => {
        const SectionHeight = current.offsetHeight;
        sectionTop = current.offsetTop - 58;
        sectionId = current.getAttribute("id");
        sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']');


        if (scrollY > sectionTop && scrollY <= sectionTop + SectionHeight) {
            sectionClass.classList.add('active-link');
        }
        else {
            sectionClass.classList.remove("active-link")
        }
    })
}


window.addEventListener("scroll", ScrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal(
    {
        origin: 'top',
        distance: '60px',
        duration: 3000,
        delay: 400,
    }
)
sr.reveal(`.home_data,.explore_data,.explore_user,.footer__container`);
sr.reveal(`.home_card`, { delay: 600, distance: '100px', interval: 100 });
sr.reveal(`.about_data,.join_image`, { origin: 'right' });
sr.reveal(`.about_img, .join_data`, { origin: 'left' });
sr.reveal(`.popular_card`, { interval: 200 });
