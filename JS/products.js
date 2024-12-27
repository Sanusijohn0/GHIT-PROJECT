const admin = document.getElementById("admin");
const info = document.querySelector(".info");

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
