const form = document.querySelector(".login-form");

form.addEventListener("submit", checkFormSubmitData);

function checkFormSubmitData(event) {
  event.preventDefault();
  const dataForm = {};
  dataForm.email = event.currentTarget.elements.email.value;
  dataForm.password = event.currentTarget.elements.password.value;
  if (!dataForm.email || !dataForm.password) {
    alert("Все поля должны быть заполнены");
    return;
  }
  console.log(dataForm);
  event.currentTarget.reset();
}
