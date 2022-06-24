function rotateOpen() {
    var page = document.getElementById("rotate");
    var icons = document.getElementById("menuIcon");

    page.classList.add("rotated");
    setTimeout("menu.classList.add('shown')", 500);
    icons.classList.add("rotated");
}

function rotateClose() {
    var menu = document.getElementById("menu");
    var page = document.getElementById("rotate");
    var icons = document.getElementById("menuIcon");

    menu.classList.remove("shown");
    page.classList.remove("rotated");
    icons.classList.remove("rotated");

    check = true;
}
