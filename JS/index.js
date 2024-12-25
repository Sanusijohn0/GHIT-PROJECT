const icon = document.getElementById("navbar-toggler");
const backToTop = document.querySelector(".backtotop");
const loginForm = document.getElementById("login-form");
const signUpForm = document.getElementById("signup-form");
const loginButton = document.getElementById("login-button");
const cancelButton = document.getElementById("cancel");
const cancelButtonTwos = document.getElementById("cancel2");

icon.onclick = () => {
  icon.classList.toggle("hover");
  const navItem = document.querySelector(".navbar-nav");
  navItem.classList.toggle("show");
};

document.addEventListener("scroll", () => {
  backToTop.style.display = "flex";
});

loginButton.addEventListener("click", () => {
  loginForm.style.display = "flex";
});
cancelButton.addEventListener("click", () => {
  loginForm.style.display = "none";
});
window.addEventListener("load", () => {
  signUpForm.style.display = "flex";
});

cancelButtonTwos.addEventListener("click", () => {
  signUpForm.style.display = "none";
});
