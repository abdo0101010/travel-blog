let icons = document.querySelectorAll(".icon");

function change_heart() {
  icons.forEach(function (icon) {
    icon.innerHTML = `<i class="fa-regular fa-eye"><span>0</span></i>
                         <i class="fa-solid fa-heart" style="color: #e60000;"></i>`;
  });
}
