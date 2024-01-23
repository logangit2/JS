window.addEventListener("scroll",function(){

let content= document.querySelector(".columns");
let contentPosition=content.getBoundingClientRect().top;
let screenheight=window.innerHeight;
if(contentPosition<screenheight){
    content.classList.add("active");
   }else{
    content.classList.remove("active");
   }

});

window.addEventListener("scroll",function(){

    let content= document.querySelector(".columns2");
    let contentPosition=content.getBoundingClientRect().top;
    let screenheight=window.innerHeight;
    let minus=100;
    if(contentPosition<screenheight-minus){
        content.classList.add("active2");
       }else{
        content.classList.remove("active2");
       }
    
    });