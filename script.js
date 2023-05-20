const menuToggle = document.querySelector(".menu-toggel input");
const nav = document.querySelector(".navbar ul");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
