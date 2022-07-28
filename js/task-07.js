// console.log(document.querySelector("#font-size-control").value);

const targetControl = document.querySelector("#font-size-control");
const targetEl = document.querySelector("#text");

targetControl.addEventListener(
  "input",
  (event) => (targetEl.style.fontSize = `${event.currentTarget.value}px`)
);
