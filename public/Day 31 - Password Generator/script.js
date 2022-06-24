const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "\"'!#$%&()*+-./:;<=>?@[\\]^_`{|}~";

var output = document.getElementById("outputText");
var form = document.getElementById("selectPswd");

window.onload = () => {
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        var options = document.querySelectorAll("input[type=checkbox]:checked");

        if (options.length === 0) {
            alert(
                "Select at least one kind of character to generate your password!"
            );

            output.innerHTML = "";
            return;
        }

        var allPossibleChar = "";

        for (let i = 0; i < options.length; i++) {
            switch (options[i].value) {
                case "up":
                    allPossibleChar += uppercase;
                    break;

                case "low":
                    allPossibleChar += lowercase;
                    break;

                case "num":
                    allPossibleChar += numbers;
                    break;

                case "sym":
                    allPossibleChar += symbols;
                    break;

                default:
                    break;
            }
        }

        globalThis.password = "";
        var pswdLength = document.getElementById("pswdLength").value;

        for (let i = 0; i < pswdLength; i++) {
            var randomIndex = generateRandomInteger(allPossibleChar.length);
            password += allPossibleChar[randomIndex];
        }

        output.innerHTML = password;
    });
};

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

function copyPswd() {
    const textarea = document.createElement("textarea");
    const password = output.innerText;

    if (!password) {
        alert("There's no password to copy!");
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);

    textarea.select();
    document.execCommand("copy");
    textarea.remove();

    alert("Password copied to clipboard!");
}
