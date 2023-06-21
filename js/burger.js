const burgerButton=document.querySelector(".upper-nav__burger");
const burgerMenu=document.querySelector(".upper-nav__container");
burgerButton.addEventListener("click",function (event){
    if(burgerButton.classList.contains("active")){
        burgerButton.classList.remove("active");
        burgerMenu.classList.remove("active");
    }
    else{
        burgerButton.classList.add("active");
        burgerMenu.classList.add("active");
    }
});

