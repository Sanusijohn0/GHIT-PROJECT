const admin = document.getElementById("admin");
const info = document.querySelector(".info");
const icon = document.getElementById("navbar-toggler");
const loginForm = document.getElementById("login-form");
const close = document.querySelector("#close");
const nav2 = document.querySelector(".nav-2");

admin.addEventListener("click", () => {
  info.classList.toggle("none");
});

icon.addEventListener("click", () => {
  nav2.style.display = "flex";
});

close.addEventListener("click", () => {
  nav2.style.display = "none";
});

document.addEventListener("scroll", () => {
  backToTop.style.display = "flex";
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

document.querySelector(".box-one").addEventListener("click", () => {
  document.location.href = "../register.html";
});
