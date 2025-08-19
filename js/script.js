// function toggleMenu() {
//   const menu = document.getElementById("menu");
//   menu.style.display = menu.style.display === "block" ? "none" : "block";
// }

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("open");
}
