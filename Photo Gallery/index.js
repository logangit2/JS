const modal = document.createElement('div')
modal.id='modal'
document.body.appendChild(modal)

const img = document.querySelectorAll('.img')

img.forEach(image => {
   image.addEventListener('click',()=>{
   modal.classList.add('active')
   const imgEle = document.createElement('img')
   imgEle.src=image.src;
   imgEle.id='img'
   while(modal.firstChild){
    modal.removeChild(modal.firstChild)
   }
   modal.append(imgEle)
   })
});

modal.addEventListener('click',()=>{
    modal.classList.remove('active')
})