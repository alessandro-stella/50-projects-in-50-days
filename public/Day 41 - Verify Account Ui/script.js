const inputFields = Array.from(document.getElementsByClassName("code-number"));

for (let i = 0; i < 6; i++) {
    inputFields[i].addEventListener("input", (e) => {
        switch (e.inputType) {
            case "deleteContentBackward":
                if (i != 0) {
                    inputFields[i - 1].focus();
                } else {
                    inputFields[i].blur();
                }
                break;

            case "insertText":
                if (isNaN(e.data)) {
                    inputFields[i].value = inputFields[i].value.slice(0, -1);
                    break;
                }

                if (inputFields[i].value.length >= 2) {
                    inputFields[i].value = inputFields[i].value.substr(1);
                }

                if (i != 5) {
                    inputFields[i + 1].focus();
                } else {
                    inputFields[i].blur();
                }
                break;

            default:
                break;
        }
    });

    inputFields[i].addEventListener("keydown", (e) => {
        if (e.code === "Backspace" && inputFields[i].value === "") {
            e.preventDefault();
            inputFields[i - 1].focus();
        }
    });
}
