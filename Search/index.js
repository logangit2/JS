const input = document.querySelector("#input");
const div = document.querySelector("div");
const para = document.querySelectorAll("p");

function search(event) {
  const searchValue = event.target.value;

  for (let index = 0; index < para.length; index++) {
    const paravalue = para[index].textContent;
    if (paravalue.indexOf(searchValue) < 0) {
      para[index].style.display = "none";
    } else {
      para[index].style.display = "block";
    }

    console.log(paravalue);
  }
}
