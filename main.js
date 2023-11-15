const sidebar = document.querySelector("aside");
const sidebarToggle = document.querySelector(".humburger");

sidebarToggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

if (innerWidth <= 1000) {
  sidebar.classList.add("close");
} else {
  sidebar.classList.remove("close");
}

const body = document.body;
const modeToggle = document.querySelector(".switch-mode");

modeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
});
