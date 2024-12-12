let icons = document.querySelectorAll(".icon");
function change_heart() {
  const heartIcon = document.querySelector(".fa-heart");
  heartIcon.classList.toggle("fa-regular");
  heartIcon.classList.toggle("fa-solid");
}
let ErrorName = document.getElementById("ErrorName");
let ErrorEmail = document.getElementById("ErrorEmail");
let form = document.getElementById("subscription-form");
let email = document.getElementById("email");
let Name = document.getElementById("name");
form.addEventListener("submit", function (event) {
  let nameErrors = [];
  let emailErrors = [];

  if (Name.value.trim() === "") {
    nameErrors.push("Please enter your name.");
  } else if (Name.value.length < 3) {
    nameErrors.push("Name must be at least 3 characters long.");
  }

  if (email.value.trim() === "") {
    emailErrors.push("Please enter your email.");
  } else {
    let emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    if (!emailPattern.test(email.value)) {
      emailErrors.push(
        "Please enter a valid email address ending with gmail.com."
      );
    }
  }

  if (nameErrors.length > 0 || emailErrors.length > 0) {
    event.preventDefault();
    ErrorName.innerHTML = nameErrors.join("<br>");
    Name.style.border = "1px solid red";
    ErrorEmail.innerHTML = emailErrors.join("<br>");
    email.style.border = "1px solid red";
  } else {
    let userData = {
      name: Name.value.trim(),
      email: email.value.trim(),
    };
    localStorage.setItem("subscriber", JSON.stringify(userData));
    ErrorEmail.innerHTML = "";
    ErrorName.innerHTML = "";
    Name.style.border = "1px solid green";
    email.style.border = "1px solid green";
    form.reset();
    alert("Thank you for subscribing to our newsletter!");
  }
});
console.log(localStorage.getItem("subscriber"));
let output = document.querySelector(".output");
function toggleMenu() {
  output.classList.toggle("active-output");
  console.log("click");
}
