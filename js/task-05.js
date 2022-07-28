const inputEl = document.querySelector("#name-input");

const targetEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) =>
  event.currentTarget.value != ""
    ? (targetEl.textContent = event.currentTarget.value)
    : (targetEl.textContent = "Anonymous")
);
