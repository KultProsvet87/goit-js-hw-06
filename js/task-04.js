let counterValue = 0;

const incrementButtonEl = document.querySelector(
  `button[data-action = "increment"]`
);

const decrementButtonEl = document.querySelector(
  `button[data-action = "decrement"]`
);

const targetEl = document.querySelector("#value");

// const chengElemetValue = (event) => {
//   if (event.currentTarget.dataset.action === "decrement") {
//     counterValue -= 1;
//     targetEl.textContent = counterValue;
//     return;
//   }
//   counterValue += 1;
//   targetEl.textContent = counterValue;
// };

incrementButtonEl.addEventListener("click", chengElemetValue);
decrementButtonEl.addEventListener("click", chengElemetValue);

function chengElemetValue(event) {
  if (event.currentTarget.dataset.action === "decrement") {
    counterValue -= 1;
    targetEl.textContent = counterValue;
    return;
  }
  counterValue += 1;
  targetEl.textContent = counterValue;
}
