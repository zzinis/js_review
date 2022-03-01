const swiper = new Swiper('.wrap', {
    navigation :{
        nextEl :".swiper-button-next", 
        prevEl :".swiper-button-prev" 
    }, 

    pagination :{
        el : ".swiper-pagination", 
        clickable: true
    }, 
    loop: true, 
    speed : 500, 
    direction : "horizontal", 
    spaceBetween : 0, 
    slidesPerView : 1, 
    grabCursor : true, 

    autoplay :{
        delay:1000, 
        disableOnInteraction : true 
    } 
});

var btnStart = document.querySelector(".btnStart"); 
var btnStop = document.querySelector(".btnStop"); 

swiper.autoplay.stop(); 

btnStart.onclick = function(){
    swiper.autoplay.start(); 
}
btnStop.onclick = function(){
    swiper.autoplay.stop(); 
}
