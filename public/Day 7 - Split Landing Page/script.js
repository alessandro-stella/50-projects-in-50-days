var right = document.getElementById("right");
var left = document.getElementById("left");

window.onload = function () {
    left.addEventListener("mouseenter", () => {
        right.classList.add("close");
        left.classList.add("open");
    });

    right.addEventListener("mouseenter", () => {
        left.classList.add("close");
        right.classList.add("open");
    });

    left.addEventListener("mouseleave", () => {
        right.classList.remove("close");
        left.classList.remove("open");
    });

    right.addEventListener("mouseleave", () => {
        left.classList.remove("close");
        right.classList.remove("open");
    });
};

function openLink(link) {
    switch (link) {
        case "csgo":
            var selection =
                "https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/";
            break;

        case "valorant":
            var selection = "https://playvalorant.com/it-it/";
    }

    window.open(selection);
}
