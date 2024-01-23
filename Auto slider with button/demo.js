let slidePosition = 0
const slider = document.querySelectorAll('.slider-item')
const sliderLength =slider.length
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

prev.addEventListener("click", () => {
  prevSlide()
})

next.addEventListener("click", () => {
  nextSlide()
})

function prevSlide() {
  if(slidePosition==0){
    slidePosition=sliderLength-1
  }else{
    slidePosition--;
  }
 
updatePosition()
}

function nextSlide() {

  if(slidePosition==sliderLength-1 ){
    slidePosition=0
  }else{
    slidePosition++;
  }
  // console.log(slidePosition)

  updatePosition()
  
}

function updatePosition(){
  slider.forEach((slide)=>{
    slide.classList.remove("active")
    slide.classList.add("hidden")
  })
  slider[slidePosition].classList.add("active")
  
  dots.forEach((dot)=>{
    dot.classList.remove('dot-active')
  })

  dots[slidePosition].classList.add('dot-active')
}

const dotsContainer=document.querySelector('.dots')

slider.forEach((slide)=>{
  const dot=document.createElement('div')
  dot.classList.add('dot')
  dotsContainer.appendChild(dot)
})

const dots=document.querySelectorAll('.dot')

dots[slidePosition].classList.add('dot-active')

dots.forEach((dot,index)=>{
  dot.addEventListener("click",()=>{
    slidePosition=index;
    updatePosition();
  })
})

setInterval(()=>{

  if(slidePosition==sliderLength-1 ){
    slidePosition=0
  }else{
    slidePosition++;
  }

  updatePosition();

},3000)