const searchBox = document.querySelector("input");
const Sugg = document.querySelector(".suggTab");

searchBox.addEventListener("keyup", suggestion);

async function suggestion() {
  const responseList = await fetch("./data.json");
  const keywordList = await responseList.json();
  console.log(keywordList);
}
