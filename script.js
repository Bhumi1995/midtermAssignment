const navbar = document.querySelector(".navbar");
const icon1 = document.querySelector(".icon1");
const icon2 = document.querySelector(".icon2");
const menu = document.querySelector(".hamburger-icon");

menu.addEventListener("click",() => {
    navbar.classList.toggle("active");
    icon2.classList.toggle("active");
    icon1.classList.toggle("active");
});

