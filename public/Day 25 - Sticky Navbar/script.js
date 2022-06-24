var navbar = document.getElementById("navbar");

window.onscroll = () => {
    var scroll = window.scrollY;
    console.log(scroll);

    if (scroll < 250) {
        navbar.classList.remove("active");
    }

    if (scroll >= 250) {
        navbar.classList.add("active");
    }
};
