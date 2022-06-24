var image = document.getElementsByClassName("image");
var desc = document.getElementsByClassName("desc");

window.onload = function () {
    for (let i = 0; i < image.length; i++) {
        image[i].addEventListener("click", () => {
            expand(image[i], desc[i]);
        });
    }
};

function expand(currentImage, currentDesc) {
    for (let i = 0; i < image.length; i++) {
        if (currentImage != image[i]) {
            image[i].classList.remove("expanded");
            desc[i].classList.remove("shown");
        }
    }

    currentImage.classList.add("expanded");

    setTimeout(function () {
        currentDesc.classList.add("shown");
    }, 500);
}

function changeBackground(image) {
    var gradient = "";

    switch (image) {
        case "fortnite":
            gradient =
                "linear-gradient(318deg, #0049b9, #4c7897, #50a970, #1fdb37)";
            break;

        case "rocket":
            gradient =
                "linear-gradient(98deg, #820093, #7e5cb2, #6995d1, #00cbf1)";
            break;

        case "valorant":
            gradient =
                "linear-gradient(104deg, #7f062d, #9e0c30, #bf1333, #e01a35)";
            break;

        case "fallout":
            gradient =
                "linear-gradient(117deg, #553c30, #6f5c54, #877e7c, #a0a2a5)";
            break;

        case "r6":
            gradient =
                "linear-gradient(119deg, #495974, #617490, #7b91ad, #95afcb)";
            break;

        default:
            break;
    }

    document.body.style.backgroundImage = gradient;
}
