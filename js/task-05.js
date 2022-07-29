const inputEl = document.querySelector("#name-input");

const targetEl = document.querySelector("#name-output");

inputEl.addEventListener(
  "input",
  (event) =>
    //(targetEl.textContent = event.currentTarget.value ?? "Anonymous")
    //Как я понял из MDN, данный оператор ?? не понимает пустую строку "" ка null или undefined  и по этому при пустом поле ввода "Anonymous" не присваевается targetEl
    (targetEl.textContent = event.currentTarget.value
      ? event.currentTarget.value
      : "Anonymous")
);
