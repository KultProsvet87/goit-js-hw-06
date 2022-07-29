function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const targetEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", changeBgColor);
function changeBgColor() {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  targetEl.textContent = color;
}
