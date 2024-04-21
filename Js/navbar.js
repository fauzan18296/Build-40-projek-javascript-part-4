let menuBtn = document.getElementById("hamburger-menu");
let menuList = document.querySelector(".nav-menu");
menuBtn.addEventListener("click", () => {
   menuList.classList.toggle("active");
});