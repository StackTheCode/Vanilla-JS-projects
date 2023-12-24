const section=document.querySelector("section");
const showbtn=document.querySelector(".show_modal");
const overlay=document.querySelector(".overlay")
const closebtn =document.querySelector(".close-btn");

showbtn.addEventListener("click",()=>{
   
  section.classList.add("active");
})

overlay.addEventListener("click",()=>{
   
  section.classList.remove("active");
})



closebtn.addEventListener("click",()=>{
   
  section.classList.remove("active");
})

