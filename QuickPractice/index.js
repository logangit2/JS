const imgs = document.querySelectorAll("img");
let slidePosition = 0;
const sliderLength = imgs.length;

function prevSlide() {
  if (slidePosition == 0) {
    slidePosition = sliderLength - 1;
  } else {
    slidePosition--;
  }
  imgPosition();
}

function nextSlide() {
  if (slidePosition == sliderLength - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  imgPosition();
}

function imgPosition() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
  imgs[slidePosition].classList.add("active");
}

// setInterval(() => {
//   if (slidePosition == sliderLength - 1) {
//     slidePosition = 0;
//   } else {
//     slidePosition++;
//   }
//   imgPosition();
// }, 1000);
