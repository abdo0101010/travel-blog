let icons = document.querySelectorAll(".icon");
function change_heart() {
  const heartIcon = document.querySelector(".fa-heart");
  heartIcon.classList.toggle("fa-regular");
  heartIcon.classList.toggle("fa-solid");
};

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
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".post-card"); // البطاقات
  let currentIndex = 0; // الفهرس الحالي

  // وظيفة لتحديث العرض
  const updateCards = () => {
    cards.forEach((card, index) => {
      // إخفاء كل البطاقات عدا البطاقة الحالية
      card.style.display = index === currentIndex ? "block" : "none";
    });
  };

  // السهم التالي
  window.nextCard = () => {
    currentIndex = (currentIndex + 1) % cards.length; // الانتقال إلى البطاقة التالية
    updateCards();
  };

  // السهم السابق
  window.prevCard = () => {
    currentIndex = (currentIndex - 1 + cards.length) % cards.length; // العودة إلى البطاقة السابقة
    updateCards();
  };

  // تحديث العرض عند بدء التشغيل
  updateCards();
});
function toggleHeart(element){
  element.classList.toggle("fa-solid");
  element.classList.toggle("fa-regular");
}

let head_text = document.querySelector("#head-hero");
let subtitle_hero = document.querySelector("#subtitle-hero");
console.log(head_text);
console.log(subtitle_hero);
const head = "Discover the World";
const subtitle = "Explore the beauty of the world with us.";



let index=0;
function change_text() {
  if(index<head.length){
    head_text.innerHTML+=head.charAt(index);
    index++;
    setTimeout(change_text,100);
  }
}
change_text();
let index2=0;
function change_subtitle() {
  if(index<subtitle.length){
    subtitle_hero.innerHTML+=subtitle.charAt(index2);
    index2++;
    setTimeout(change_subtitle,50);
  }
}
change_subtitle();
