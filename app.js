let icons = document.querySelectorAll(".icon");

function change_heart() {
  icons.forEach(function (icon) {
    icon.innerHTML = `<i class="fa-regular fa-eye"><span>0</span></i>
                         <i class="fa-solid fa-heart" style="color: #e60000;"></i>`;
  });
}
let error = document.getElementById("error");
console.log(error);

let form = document.getElementById("subscription-form");
let email = document.getElementById("email");
let Name = document.getElementById("name");
form.addEventListener("submit", function (event) {
  let errors = [];
  if (Name.value == "" || Name.value == null) {
    errors.push("Please enter your name ");
  }
  if (Name.value.length < 3) {
    errors.push("Name must be at least 3 characters long");
  }
  if (email.value == "" || email.value == null) {
    errors.push("Please enter your email ");
  }
  let emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
  if (!emailPattern.test(email.value)) {
    errors.push("Please enter a valid email address ending with gmail.com");
  }

  if (errors.length > 0) {
    event.preventDefault();
    error.innerHTML = errors.join("<br> ");
  } else {
    error.innerHTML = "";
    alert("Thank you for subscribing to our newsletter");
  }
  console.log(error);
});
