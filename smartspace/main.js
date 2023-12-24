const swiper = new Swiper('.main-block_slider', {
  // Optional parameters
  
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '  .main-block_arrow.swiper-button-next',
    prevEl: '.main-block_arrow.swiper-button-prev',
  },


  
  },
);


// -----------tabs-----------------
const tabnavItems=document.querySelectorAll(".tabs_btn");
const tabItems=document.querySelectorAll(".tabs_item");

document.addEventListener("click",function(e){
const targetEl=e.target;
let newActiveindex= null
let currentActiveindex=null;
if(targetEl.closest('.tabs_btn')) {
  tabnavItems.forEach((tabnavItem,index) => {
if( tabnavItem.classList.contains('active'))
{
currentActiveindex=index;
tabnavItem.classList.remove('active')
}
if(tabnavItem === targetEl){
  newActiveindex=index;
}
  });

  targetEl.classList.add('active');
  tabItems[currentActiveindex].classList.remove('active')
  tabItems[newActiveindex].classList.add('active');
}

});