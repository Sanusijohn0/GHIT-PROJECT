const icon = document.getElementById("navbar-toggler");
const backToTop = document.querySelector(".backtotop");
const loginForm = document.getElementById("login-form");
const admin = document.getElementById("admin");
const info = document.querySelector(".info");

icon.onclick = () => {
  icon.classList.toggle("hover");
  const navItem = document.querySelector(".navbar-nav");
  navItem.classList.toggle("show");
};

document.addEventListener("scroll", () => {
  backToTop.style.display = "flex";
});

admin.addEventListener("click", () => {
  info.classList.toggle("none");
});
