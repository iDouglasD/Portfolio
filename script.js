const hamburguer = document.querySelector(".hamburguer");
const container = document.querySelector(".container");

hamburguer.addEventListener("click", function () {
  container.classList.toggle("show-menu");
});
