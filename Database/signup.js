function genrateUniqueId() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 10000);
  return `${timestamp}_${randomNum}`;
}

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userId = genrateUniqueId();

  // Validate input
  if (fullName.trim() === "" || email.trim() === "" || password.trim() === "") {
    alert(`Name, email, and password cannot be empty`);
    return; // Exit the function if validation fails
  }

  // Store the data in local storage
  localStorage.setItem("userName", fullName);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userId", userId);
  localStorage.setItem("userPassword", password); // Store password

  alert("Signup successful! You can now log in.");
  this.reset(); // Reset the form
  window.location.href = "login.html"; // Redirect to login page
});
