const courses = [{
    course: "HTML", percent: "80"
},
{
    course: "CSS", percent: "70"
},
{
    course: "JS", percent: "50"
}

]

const container = document.querySelector(".container")

courses.forEach((course) => {
    container.innerHTML += `<div class="progress-group">
    <div class="circular-progress" 
    <span class="course-value">${course.percent}</span>
       
    </div>
    <label class="text">${course.course}</label>
</div>`;
})

const progressGroup=document.querySelectorAll('.progress-group')

// style=" background: conic-gradient(rgb(246, 255, 0) ${3.6*course.percent}deg, rgb(200, 205, 199) 0deg);">

progressGroup.forEach((progress,index)=>{
    let progressStartTimer=0;
    let progressEndsTime=courses[index].percent;
    let speed = 1000;

    let progressTimer=setInterval(()=>{
        progressStartTimer++
        if(progressStartTimer==progressEndsTime){
            clearInterval(progressTimer)
        }
        progress.querySelector(".circular-progress").style.background= `conic-gradient(rgb(246, 255, 0) ${3.6*progressStartTimer}deg, rgb(200, 205, 199) 0deg)`

    },speed)

})