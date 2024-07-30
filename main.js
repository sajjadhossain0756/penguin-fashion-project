const nav_menu_icon = document.querySelector(".nav-menu-icon");
const navbar_nav = document.querySelector(".navbar-nav");
const cross_icon = document.querySelector(".cross-icon");
const nav_item = document.querySelectorAll(".nav-item");

nav_menu_icon.addEventListener("click",()=>{
    navbar_nav.classList.remove("hidden");
})

cross_icon.addEventListener("click",()=>{
    navbar_nav.classList.add("hidden");
})

nav_item.forEach((item)=>{
    item.addEventListener("click",()=>{
        navbar_nav.classList.add("hidden");
    })
})