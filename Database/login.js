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
      alert("Login successful!");
      window.location.href = "personal.html"; // Redirect to home page
    } else {
      alert("Invalid email or password.");
    }
  });
