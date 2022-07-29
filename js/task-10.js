function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const targetBox = document.querySelector("#boxes");

let elemSize = 30;

createBtn.addEventListener("click", () => {
  const amountOfBoxes = Number(document.querySelector("input").value);
  createBoxes(amountOfBoxes);
});

destroyBtn.addEventListener("click", destroyElem);

function createBoxes(amount) {
  let boxes = [];

  for (let i = 0; i < amount; i += 1) {
    boxes.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${elemSize}px; height: ${elemSize}px"></div>`
    );
    elemSize += 10;
  }

  targetBox.insertAdjacentHTML("beforeend", boxes.join(""));
}

function destroyElem() {
  document.querySelector("#boxes").innerHTML = "";
  elemSize = 30;
}
