document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const loginEmail = document.getElementById("user").value;
    const loginPassword = document.getElementById("loginPassword").value;

    // Retrieve stored data
    const storedEmail = localStorage.getItem("userEmail");
    const storedPassword = localStorage.getItem("userPassword");

    if (loginEmail === storedEmail && loginPassword === storedPassword) {
      document.querySelector(".alert-container").classList.remove("none");
      document.querySelector("#alert-button").addEventListener("click", () => {
        window.location.href = "personal.html"; // Redirect to home page
      });
    } else {
      document.querySelector(".alert-container-two").classList.remove("none");
      document
        .querySelector("#alert-declined-button")
        .addEventListener("click", () => {
          document.querySelector(".alert-container-two").classList.add("none");
        });
    }
  });
