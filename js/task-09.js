function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");

changeColorBtn.addEventListener("click", changeBgColor);
function changeBgColor() {
  const color = getRandomHexColor();
  document.querySelector("body").style.backgroundColor = color;
  document.querySelector(".color").textContent = color;
  console.log(color);
}
