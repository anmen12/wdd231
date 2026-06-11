const menuButton = document.querySelector("#menu-button");
const navBar = document.querySelector("#nav-bar");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("show");
    navBar.classList.toggle("show");
});