var counters = document.getElementsByClassName("counter");
var currentCounterSelection = 0;

var lines = document.getElementsByClassName("line");
var currentLineSelection = 0;

var buttons = document.getElementsByClassName("btn");

function progress(selection) {
    switch (selection) {
        case "prev":
            if (currentCounterSelection > 0) {
                counters[currentCounterSelection].classList.remove("active");
                currentCounterSelection -= 1;

                currentLineSelection -= 1;
                lines[currentLineSelection].classList.remove("active");
            }
            break;

        case "next":
            if (currentCounterSelection < 3) {
                currentCounterSelection += 1;
                counters[currentCounterSelection].classList.add("active");

                lines[currentLineSelection].classList.add("active");
                currentLineSelection += 1;
            }
            break;

        default:
            break;
    }

    switch (currentCounterSelection) {
        case 0:
            buttons[0].classList.add("off");
            break;

        case 3:
            buttons[1].classList.add("off");
            break;

        default:
            buttons[0].classList.remove("off");
            buttons[1].classList.remove("off");
            break;
    }
}
