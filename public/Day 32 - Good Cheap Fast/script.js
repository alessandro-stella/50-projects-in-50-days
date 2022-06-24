var allOptions = document.getElementsByClassName("check");
var controlCheck = 0;

function handleOptionClick(option) {
    switch (option) {
        case "good":
            if (allOptions[0].classList.value === "check") {
                allOptions[0].classList.add("on");
                controlCheck++;
            } else {
                allOptions[0].classList.remove("on");
                controlCheck--;
            }
            break;

        case "cheap":
            if (allOptions[1].classList.value === "check") {
                allOptions[1].classList.add("on");
                controlCheck++;
            } else {
                allOptions[1].classList.remove("on");
                controlCheck--;
            }
            break;

        case "fast":
            if (allOptions[2].classList.value === "check") {
                allOptions[2].classList.add("on");
                controlCheck++;
            } else {
                allOptions[2].classList.remove("on");
                controlCheck--;
            }
            break;

        default:
            break;
    }

    if (controlCheck === 3) {
        switch (option) {
            case "good":
                allOptions[2].click();
                break;

            case "cheap":
                allOptions[0].click();
                break;

            case "fast":
                allOptions[1].click();
                break;

            default:
                break;
        }
    }
}
