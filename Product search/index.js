const btns = document.querySelectorAll(".btn");
const search = document.querySelector("#search");
const images = document.querySelectorAll("img");

search.addEventListener("keyup", (e) => {
  const searchvalue = e.target.value;
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });
  btns[0].classList.add("active");
  images.forEach((image) => {
    const dataValue = image.dataset.item;
    if (dataValue.includes(searchvalue)) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btnPos = 1;
    tabBtn(e);
    images.forEach((img) => {
      const btnData = btn.dataset.filter;
      const imgData = img.dataset.item;
      if (btnData == "all") {
        img.style.display = "block";
      } else {
        if (btnData == imgData) {
          img.style.display = "block";
        } else {
          img.style.display = "none";
        }
      }
    });
  });
});

function tabBtn(e) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  e.target.classList.add("active");
}
