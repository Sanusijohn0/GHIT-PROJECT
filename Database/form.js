function genrateUniqueId() {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 10000);
  return `${timestamp}_${randomNum}`;
}
const Username = document.getElementById("fullName");
const userEmail = document.getElementById("userEmail");
const UserId = document.getElementById("userId");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const userId = genrateUniqueId();
  console.log(`User: ${fullName}, ${email}, ${userId}`);

  UserIdserId.textContent = `${userId}`;
  userEmail.textContent = `${email}`;
  Username.textContent = `${fullName}`;
});
