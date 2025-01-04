const icon = document.getElementById("navbar-toggler");
const backToTop = document.querySelector(".backtotop");
const loginForm = document.getElementById("login-form");
const admin = document.getElementById("admin");
const info = document.querySelector(".info");
const close = document.querySelector("#close");
const nav2 = document.querySelector(".nav-2");

icon.addEventListener("click", () => {
  nav2.style.display = "flex";
});

close.addEventListener("click", () => {
  nav2.style.display = "none";
});

document.addEventListener("scroll", () => {
  backToTop.style.display = "flex";
});

admin.addEventListener("click", () => {
  info.classList.toggle("none");
});

// Retrieve data from local storage
const name = localStorage.getItem("userName");
const email = localStorage.getItem("userEmail");
const userId = localStorage.getItem("userId");

// Display the user information
if (fullName && email && userId) {
  info.innerHTML = `
                <h4>User ID:   <span> ${userId}</span></h4>
                <h4>Name: <span>${name}</span></h4>
                <h4>Email: <span>${email}</span></h4>
                <button class="button" id="logoutButton"> Log Out</button>
            `;
}

const readmore = document.querySelector("#about-read");
readmore.addEventListener("click", () => {
  document.querySelector("#last").classList.toggle("last");
});
