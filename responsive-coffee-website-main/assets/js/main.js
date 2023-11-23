/*=============== LOADER ===============*/
const Load=document.querySelector('.load');
const LoadGif=document.querySelector('.load_img');



onload =()=>{
    const Load=document.querySelector('.load');
const LoadGif=document.querySelector('.load_img');


setTimeout(  ()=>{
    Load.style.display='none'
},2500 )
}

/*=============== SHOW MENU ===============*/

const navMenu = document.querySelector('.nav_menu');
const CloseButton = document.querySelector('.nav_close')
const ToggleButton = document.querySelector('.nav_toggle')



if (ToggleButton) {
    ToggleButton.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
if (CloseButton) {
    CloseButton.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.menu_item-link');


const CloseMenu = () => {
    navMenu.classList.remove('show-menu')
}


navLink.forEach(e => e.addEventListener('click', CloseMenu))



/*=============== CHANGE BACKGROUND HEADER ===============*/

function ChangeHeader() {
    const header = document.querySelector('.header');

    this.scrollY >= 50 ? header.classList.add('scroll-header') :
        header.classList.remove('scroll-header');

}
window.addEventListener('scroll', ChangeHeader)
/*=============== MIXITUP FILTER PRODUCTS ===============*/
var mixer = mixitup('.products_content', {
    selectors: {
        target: '.products_card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */


/* Link active products */
const linkProducts = document.querySelectorAll('.products_item')

function activeLink() {
    linkProducts.forEach(l => l.classList.remove('active-product'))
    this.classList.add('active-product')
}


linkProducts.forEach(l => l.addEventListener('click', activeLink))
/*=============== SHOW SCROLL UP ===============*/

const scrollup = document.querySelector('.scrollup');

const ShowScrollUp = () => {
    this.scrollY >= 350 ? scrollup.classList.add('scroll-active') :
        scrollup.classList.remove('scroll-active')
}

window.addEventListener('scroll', ShowScrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function ScrollShow() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')



        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')

        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}
window.addEventListener('scroll', ScrollShow)