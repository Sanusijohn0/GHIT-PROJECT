const nav = document.getElementById("nav");
const icon = document.getElementById("navbar-toggler");

icon.onclick = () => {
  nav.classList.toggle("mobile-nav");
  icon.classList.toggle("hover");
  nav.classList.add("fixed");
};
