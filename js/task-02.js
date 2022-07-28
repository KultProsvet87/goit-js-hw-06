const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

// ingredients.forEach((value) => {
//   ingredientsEl.append(document.createElement("li"));
//   // console.log(ingredientsEl.lastChild);
//   ingredientsEl.lastChild.classList.add("item");
//   ingredientsEl.lastChild.textContent = value;
// });

const elements = ingredients.map((value) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = value;
  return element;
});
ingredientsEl.append(...elements);
