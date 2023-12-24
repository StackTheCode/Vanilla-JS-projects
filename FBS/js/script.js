

// ---------MENU---------------
const toggleBtn = document.querySelector('.nav_toggle'),
    closeBtn = document.querySelector('.nav_close'),
   navMenu = document.querySelector('.nav_menu');


   toggleBtn.addEventListener('click',()=>{
    if(toggleBtn){
    navMenu.classList.add('show-menu');
    }
   })
   closeBtn.addEventListener('click',()=>{
    if(closeBtn){
    navMenu.classList.remove('show-menu')
}
   })


//    REMOVE MENU WITH LINKS
const navLinks = document.querySelectorAll('.nav-link')
function hideLinks(){
    navMenu.classList.remove('show-menu');
}

navLinks.forEach(link=>{
    link.addEventListener('click',hideLinks)
})
//    --------TIMER---------
const endDate = new Date('2023-12-31 23:59:59').getTime();

function updateTimer() {
    const currentDate = new Date().getTime();
    const timeLeft = endDate - currentDate;

    if (timeLeft <= 0) {
        document.getElementById("timer").innerHTML = "Время истекло";
    } else {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }
}

// Обновляем таймер каждую секунду
const timerInterval = setInterval(updateTimer, 1000);

// Инициализируем таймер при загрузке страницы
updateTimer();