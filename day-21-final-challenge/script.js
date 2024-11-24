const navButton = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav");

navButton.addEventListener("click", () => {
    navList.classList.toggle("nav--visible");
})