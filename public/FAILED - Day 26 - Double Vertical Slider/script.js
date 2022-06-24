var description = document.getElementById("description");
var images = document.getElementById("images");
var count = 0;

function moveImage(direction) {
    switch(direction) {
        case "up":
            description.style.top = count*100 + "%";
            images.style.top = "-" + count*100 + "%";
            count++;
        break;

        case "down":
            description.style.top = "-" + count*100 + "%";
            images.style.top = "-" + (count-1)*100 + "%";
            count--;
        break;

        default:
        break;
    }

    if (count < 1) {
        count = 1;
    }

    if (count > 2) {
        count = 2;
    }
}