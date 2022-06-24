var background = [
    document.getElementById("main"),
    document.getElementById("image"),
];

var index = 1;

window.onload = updateImage("");

function updateImage(image) {
    switch (image) {
        case "prev":
            index--;
            break;

        case "next":
            index++;
            break;

        default:
            break;
    }

    if (index == 11) {
        index = 1;
    }

    if (index == 0) {
        index = 10;
    }

    var imageToUpdate = "url(media/image" + index + ".png)";

    background[0].style.backgroundImage = imageToUpdate;
    background[1].style.backgroundImage = imageToUpdate;
}
