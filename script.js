const navbar=document.querySelector(".navbar");
const menu=document.querySelector(".menu");

window.addEventListener("scroll",()=>{
    if(window.pageYOffset >= menu.offsetTop){
        navbar.classList.add("sticky");
    } else{
        navbar.classList.remove("sticky");
    }
});