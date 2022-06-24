var text = document.getElementsByClassName("inputField");
var placeholders = document.getElementsByClassName("letter");

function movePlaceholder(position, index) {
    if (text[index].value != "") {
        return;
    }

    switch (position) {
        case "up":
            if (index == 0) {
                for (let i = 0; i <= 4; i++) {
                    setTimeout(() => {
                        placeholders[i].classList.add("up");
                    }, i * 50);
                }
            } else {
                for (let i = 5; i < placeholders.length; i++) {
                    setTimeout(() => {
                        placeholders[i].classList.add("up");
                    }, (i - 5) * 50);
                }
            }
            break;

        case "down":
            if (index == 0) {
                for (let i = 0; i <= 4; i++) {
                    setTimeout(() => {
                        placeholders[i].classList.remove("up");
                    }, i * 50);
                }
            } else {
                for (let i = 5; i < placeholders.length; i++) {
                    setTimeout(() => {
                        placeholders[i].classList.remove("up");
                    }, (i - 5) * 50);
                }
            }
            break;
    }
}
