const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsEl = document.querySelector("#ingredients");

const elements = ingredients.map((value) => {
  const element = document.createElement("li");
  element.classList.add("item");
  element.textContent = value;
  return element;
});
ingredientsEl.append(...elements);
