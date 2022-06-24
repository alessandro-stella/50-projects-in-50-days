var remaining = document.getElementById("remaining");
var drank = document.getElementById("drank");
var glasses = document.getElementsByClassName("glass");

function drink(glassPicked) {
    if (glasses[glassPicked].classList == "glass drank") {
        glasses[glassPicked].classList.remove("drank");

        glassUpdate(glassPicked, "remove");

        if (glasses[glassPicked + 1].classList == "glass drank") {
            for (let i = glasses.length - 1; i > glassPicked; i--) {
                glasses[i].classList.remove("drank");
            }
        }

        return;
    }

    for (let i = 0; i <= glassPicked; i++) {
        glasses[i].classList.add("drank");
    }

    glassUpdate(glassPicked, "add");
}

function glassUpdate(glass, action) {
    switch (action) {
        case "add":
            var percentageDrank = (100 / 8) * (glass + 1);
            var remainingValue = 2 - 0.25 * (glass + 1);
            break;

        case "remove":
            var percentageDrank = (100 / 8) * glass;
            var remainingValue = 2 - 0.25 * glass;
            break;

        default:
            break;
    }

    var percentageRemaining = 100 - percentageDrank;

    if (percentageDrank != 0) {
        drank.classList.remove("hidden");
    } else {
        drank.classList.add("hidden");
    }

    if (percentageRemaining != 0) {
        remaining.classList.remove("hidden");
    } else {
        remaining.classList.add("hidden");
    }

    drank.style.height = percentageDrank + "%";
    remaining.style.height = percentageRemaining + "%";

    drank.innerHTML = percentageDrank + "%";
    remaining.innerHTML =
        remainingValue + "L <div class='subtitle'> mancanti </div>";
}
