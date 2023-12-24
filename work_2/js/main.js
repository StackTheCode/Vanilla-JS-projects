"use-strict";

document.addEventListener ('click',documentClick);



   function documentClick(e){
    const targetitem=e.target;
    if(targetitem.closest('.menu_icon')){
        document.documentElement.classList.toggle('menu_open')
    }
   }
