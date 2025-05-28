document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  let allFilled = true;

  const inputs = document.querySelectorAll(".input");

  inputs.forEach((input) => {
    const span = input.nextElementSibling;

    if (input.value.trim() === "") {
      input.classList.add("invalid");
      input.classList.remove("valid");
      span.classList.add("show");
      allFilled = false;
    } else {
      input.classList.add("valid");
      input.classList.remove("invalid");
      span.classList.remove("show");
    }
  });

  if (allFilled) {
    alert("Formulário enviado com sucesso!");
  } else {
    inputs.forEach((input) => {
      if (input.value.trim() === "") {
        input.classList.add("invalid");
        input.classList.remove("valid");
      } else {
        input.classList.add("valid");
        input.classList.remove("invalid");
      }
    });
  }
});
