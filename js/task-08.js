const form = document.querySelector(".login-form");

form.addEventListener("submit", checkFormSubmitData);

// console.log(form.elements);

function checkFormSubmitData(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements.email.value === "" ||
    event.currentTarget.elements.password.value === ""
  ) {
    alert("Все поля должны быть заполнены");
    return;
  }
  const dataForm = {};
  dataForm.email = event.currentTarget.elements.email.value;
  dataForm.password = event.currentTarget.elements.password.value;
  console.log(dataForm);
  event.currentTarget.reset();
}
