const cancelButton = document.getElementById("cancel");
const Electcourses = document.getElementById("elect-courses");
const ElectButton = document.getElementById("electronics-button");
const cancelButtonTwo = document.getElementById("cancel2");
const graphicscourses = document.getElementById("graphics-courses");
const graphicsButton = document.getElementById("graphics-button");
const cancelButtonThree = document.getElementById("cancel3");
const powercourses = document.getElementById("power-courses");
const powerButton = document.getElementById("power-button");
const cancelButtonFour = document.getElementById("cancel4");
const computercourses = document.getElementById("computer-courses");
const computerButton = document.getElementById("computer-button");
const admin = document.getElementById("admin");
const info = document.querySelector(".info");

ElectButton.addEventListener("click", () => {
  Electcourses.style.display = "flex";
});

cancelButton.addEventListener("click", () => {
  Electcourses.style.display = "none";
});

graphicsButton.addEventListener("click", () => {
  graphicscourses.style.display = "flex";
});

cancelButtonTwo.addEventListener("click", () => {
  graphicscourses.style.display = "none";
});

powerButton.addEventListener("click", () => {
  powercourses.style.display = "flex";
});

cancelButtonThree.addEventListener("click", () => {
  powercourses.style.display = "none";
});

computerButton.addEventListener("click", () => {
  computercourses.style.display = "flex";
});

cancelButtonFour.addEventListener("click", () => {
  computercourses.style.display = "none";
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
