document.addEventListener("DOMContentLoaded", () => {
  const selectedCourses =
    JSON.parse(localStorage.getItem("selectedCourses")) || [];
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  const courseList = document.getElementById("course-list");
  const totalPriceElement = document.getElementById("total");

  let totalPrice = 0;
  if (selectedCourses.length > 0) {
    selectedCourses.forEach((course) => {
      let listitem = document.createElement("li");
      listitem.classList.add("course-item");

      let courseName = document.createElement("span");
      courseName.classList.add("course-name");
      courseName.textContent = `${course.name}`;

      let coursePrice = document.createElement("span");
      coursePrice.classList.add("course-price");
      coursePrice.textContent = `$${course.price}`;

      let deleteBtn = document.createElement("i");
      deleteBtn.classList.add("bi", "bi-trash-fill", "delete-btn");

      deleteBtn;

      listitem.appendChild(courseName);
      listitem.appendChild(coursePrice);
      listitem.appendChild(deleteBtn);

      courseList.appendChild(listitem);
      totalPrice += parseFloat(course.price);
    });
  } else {
    courseList.innerHTML = "<p> No Courses selected </p>";
  }
  totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
});

//Payment Form

const expiryInput = document.getElementById("expiry");

expiryInput.addEventListener("input", (event) => {
  let value = event.target.value.replace(/\D/g, "");
  if (value.length >= 2) {
    value = value.slice(0, 2) + "/" + value.slice(2, 4);
  }
  event.target.value = value.slice(0, 5);
});

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const cardNumber = document.getElementById("card-number").value;
  const expiry = document.getElementById("expiry").value;
  const cvv = document.getElementById("cvv").value;

  if (cardNumber.trim() === "" || expiry === "" || cvv === "") {
    document.querySelector(".alert-container-two").style.display = "flex";
    document
      .querySelector("#alert-declined-button")
      .addEventListener("click", () => {
        document.querySelector(".alert-container-two").style.display = "none";
      });
    return;
  }

  document.querySelector(".payment-successful").classList.remove("none");

  setTimeout(() => {
    document.querySelector(".payment-successful").classList.add("none");
    form.reset();
  }, 4000);
});
