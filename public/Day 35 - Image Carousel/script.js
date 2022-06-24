const images = document.getElementsByTagName("img");
var currentMovement = 0;

window.onload = () => {
    setInterval(() => {
        nextImage();
    }, 2500);
};

function nextImage() {
    currentMovement += 30;

    if (currentMovement > 120) {
        currentMovement = 0;
    }

    for (image of images) {
        image.style.right = currentMovement + "em";
    }
}

function prevImage() {
    currentMovement -= 30;

    if (currentMovement < 0) {
        currentMovement = 120;
    }

    for (image of images) {
        image.style.right = currentMovement + "em";
    }
}
