"use strict"
window.onload=function(){
    const parallax=document.querySelector('.parallax');
    if (parallax){
        const content=document.querySelector('.parallax__container')
        const clouds=document.querySelector('.images-parallax_clouds')
        const mountains=document.querySelector('.images-parallax_mountains')
        const human=document.querySelector('.images-parallax_human')
    


    //  Коэф
    const forClouds=40;
    const forMountains=20;
    const forHuman=10;
    const speed=0.05;

    let positionX=0,positionY=0;
    let coordXpercent=0,coordYpercent=0

function setMouseParallax(){
    const distX=coordXpercent-positionX;
    const distY=coordYpercent-positionY;

    positionX=positionX+(distX+speed);
    positionY=positionY+(distY+speed);
    // Передача стилей
    clouds.style.cssText=`transform:translate(${positionX/forClouds}%,${positionY/forClouds}%);`;
    mountains.style.cssText=`transform:translate(${positionX/forMountains}%,${positionY/forMountains}%);`;
    human.style.cssText=`transform:translate(${positionX/forHuman}%,${positionY/forHuman}%);`;
requestAnimationFrame(setMouseParallax);
}
setMouseParallax();
parallax.addEventListener("mousemove",function(e){
    const parallaxWidth=parallax.offsetWidth;
    const parallaxHeight=parallax.offsetHeight;


// Ноль по середине
    const coordX=e.pageX-parallaxWidth/2;
    const coordY=e.pageY - parallaxHeight/2;
// Получаем проценты
coordXpercent=coordX/parallaxWidth*100;
coordYpercent=coordY/parallaxHeight*100;
});

// эффект параллакса при скролле
let thresholdSets=[];
for(let i=0;i<=1.0;i+=0.005){
    thresholdSets.push(i)
}
const callback=function(entries,observer){
    const scrollToppercent=window.pageYOffset/parallax.offsetHeight*100;
    setParallaxItemsStyle(scrollToppercent)
}
const observer=new  IntersectionObserver(callback,{
    threshold:thresholdSets
});
observer.observe(document.querySelector('.content'));
function setParallaxItemsStyle(scrollToppercent){
    content.style.cssText=`transform:translate(0%,-${scrollToppercent/9}}%`;
    mountains.parentElement.style.cssText=`transform:translate(0%,-${scrollToppercent/6}%)`;
    human.parentElement.style.cssText=`transform:translate(0%,-${scrollToppercent/3}%)`;
}
}
}

