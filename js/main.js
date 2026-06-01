
const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".navConten");

toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
