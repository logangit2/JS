let hamburger = document.querySelector(".hamburger")
let nav = document.querySelector(".nav-links")

hamburger.addEventListener('click',()=>{
    nav.classList.toggle("display-nav")
})