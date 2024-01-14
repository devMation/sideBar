const btn = document.getElementById("btn");
const sidebar = document.getElementById("side-bar");
btn.addEventListener("click", () => {
  sidebar.classList.toggle("side");
});

