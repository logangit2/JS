const ul=document.querySelector('ul')
const ham= document.querySelector('.menu')

ham.addEventListener("click", ()=>{
    ul.classList.toggle('display-menu')
})