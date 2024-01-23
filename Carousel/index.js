let slideCount=1;


function moveSlide(slideNumber){
  let margin=slideCount*100;
  document.querySelector('.slider').style.transition="0.5s";
  m=document.querySelector('.slider').style.marginLeft=-margin+"%";

 

  if(slideCount==5){
    slideCount=1;
    
  // setTimeout(() => {
  
  document.querySelector('.slider').style.marginLeft="-100%";
  document.querySelector('.slider').style.transition="0s";
  
  
  // }, 1);
  }
  
  if(slideCount==0){
    slideCount=4;
    // setTimeout(() => {

      document.querySelector('.slider').style.marginLeft="-400%";
      document.querySelector('.slider').style.transition="0s";
      
      
  //     }, 500);
  }
  



}
function nextSlide(){

slideCount++;
moveSlide(slideCount);

}

function prevSlide(){
  slideCount--;
  moveSlide(slideCount);


}

let loader = document.querySelector('.loader')
let carousel = document.querySelector('.carousel')

window.addEventListener('load',()=>{
  loader.style.display="none";
  carousel.style.width="100%"
  carousel.style.position="relative"
})
