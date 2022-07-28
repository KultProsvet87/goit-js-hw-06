function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");

createBtn.addEventListener("click", () => {
  const amountOfBoxes = Number(document.querySelector("input").value);
  createBoxes(amountOfBoxes);
});

destroyBtn.addEventListener(
  "click",
  () => (document.querySelector("#boxes").innerHTML = "")
);

function createBoxes(amount) {
  const baseSize = 30;
  let boxes = [];

  for (let i = 0; i < amount; i += 1) {
    boxes.push(
      `<div style="background-color: ${getRandomHexColor()}; width: ${
        baseSize + 10 * i
      }px; height: ${baseSize + 10 * i}px"></div>`
    );
  }

  document.querySelector("#boxes").innerHTML = boxes.join("");
  console.log(boxes.join(""));
}
