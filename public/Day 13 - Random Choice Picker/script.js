var text = document.getElementById("input");
var insertOptions = document.getElementById("options");
var options = "";

window.onload = () => {
    text.addEventListener("keypress", (keyPressed) => {
        if (keyPressed.keyCode != 13) {
            return;
        }

        keyPressed.preventDefault();
        text.blur();

        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                randomSelect(i);
            }, 150 * i);
        }
    });
};

function randomSelect(index) {
    var allOptions = document.getElementsByClassName("option");

    var randomIndex = Math.floor(Math.random() * allOptions.length);

    for (let i = 0; i < allOptions.length; i++) {
        allOptions[i].classList.remove("focus");
    }

    allOptions[randomIndex].classList.add("focus");

    if (index == 14) {
        text.value = "";
        text.focus();
    }
}

function insertChar(value) {
    insertOptions.innerHTML = "";

    for (let i = 0; i < value.length; i++) {
        value = value.replace(",,", ",");
        value = value.replace(", ", ",");
    }

    options = value.split(",");

    for (let i = 0; i < options.length; i++) {
        if (options[i] == "") {
            return;
        }

        var newOption = document.createElement("div");
        newOption.classList.add("option");
        newOption.innerHTML = options[i];
        insertOptions.appendChild(newOption);
    }
}
