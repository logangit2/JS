document.addEventListener('DOMContentLoaded', ()=>{
    const wrapper=document.querySelector('.wrapper')
    const ind=document.querySelectorAll('.indicator button')
    let currentIndex=0;
    // let margin =-100

    ind.forEach((button,index)=>{
         button.addEventListener("click",()=>{
            ind[currentIndex].classList.remove('active')
            wrapper.style.marginLeft=-100*index +"%"
            button.classList.add('active')
            currentIndex=index
         })
    })
})