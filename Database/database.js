document.addEventListener("DOMContentLoaded", () => {
  const selectedCourses =
    JSON.parse(localStorage.getItem("selectedCourses")) || [];

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

      deleteBtn.addEventListener("click", () => {
        let price = parseFloat(coursePrice.textContent.replace("$", ""));

        totalPrice -= price;

        document.getElementById("total").textContent = `${totalPrice.toFixed(
          2
        )}`;

        listitem.remove();
      });

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
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");

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
    localStorage.removeItem("selectedCourses");
    document.getElementById("course-list").textContent = "";
    document.getElementById("total").textContent = "$ 0.00";
  }, 4000);

  localStorage.removeItem("pendingCount");

  let count = parseInt(localStorage.getItem("successCount") || "0");

  count++;

  localStorage.setItem("successCount", count);

  const { jsPDF } = window.jspdf;
  const courses = [
    {
      name: "Course 1",
      price: "",
    },
    {
      name: "Course 2",
      price: "",
    },
    {
      name: "Course 3",
      price: "",
    },
  ];

  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Registration Reciept", 14, 20);

  doc.setFontSize(12);
  doc.text(`Name: ${name}`, 14, 30);
  doc.text(`Email: ${email}`, 14, 40);

  let yPosition = 50;
  courses.forEach((course) => {
    doc.text(`${course.name}: $${course.price}`, 14, yPosition);
    yPosition += 10;
  });

  const total = courses.reduce((acc, course) => acc + course.price, 0);
  doc.text(`Total: 0.00`, 14, yPosition + 10);

  const CurrentTIme = new Date();
  const hours = String(CurrentTIme.getHours()).padStart(2, 0);
  const minutes = String(CurrentTIme.getMinutes()).padStart(2, 0);
  const seconds = String(CurrentTIme.getUTCSeconds()).padStart(2, 0);

  const formattedTime = `${hours}_${minutes}_${seconds}`;

  const fileName = `$reciept_${formattedTime}.pdf`;

  doc.save(fileName);
});
