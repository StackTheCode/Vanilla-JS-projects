const todoItems=document.getElementsByClassName("to_do_items")[0];
const input=document.getElementById("input");
const trashicon=document.getElementById("trash");
input.addEventListener("keydown",(event)=>{
if(event.key==="Enter"){
  addItem();
}




})
function addItem(){
    var divparent=document.createElement("div");
    var divchild=document.createElement("div");
    var checkicon=document.createElement("i");
    var trashicon=document.createElement("i");
    divparent.className="to_do_item";
  divparent.innerHTML='<div>' +input.value+ '</div>';


  checkicon.className="fas fa-check-square";
  checkicon.style.color="lightgray";

  checkicon.addEventListener("click",()=>{
    checkicon.style.color="limegreen";
  })

divchild.appendChild(checkicon);
trashicon.className="fas fa-solid fa-trash";
trashicon.style.color="darkgray"
trashicon.addEventListener("click",()=>{
  divparent.remove();
})
divchild.appendChild(trashicon);
divparent.appendChild(divchild);
todoItems.appendChild(divparent);
input.value='';
}