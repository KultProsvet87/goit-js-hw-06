const categoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesEl.length}`);

categoriesEl.forEach((value) => {
  console.log(`Category: ${value.querySelector("h2").textContent}`);
  console.log(`Elements: ${value.querySelectorAll("li").length}`);
});
// console.log(categoriesEl);
