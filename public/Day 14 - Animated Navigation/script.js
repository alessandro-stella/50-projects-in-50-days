var main = document.getElementById("main");
var menu = document.getElementById("menu");
var icon = document.getElementById("close");

function openMenu() {
    main.classList.toggle("opened");
    menu.classList.toggle("opened");
    icon.classList.toggle("opened");
}
