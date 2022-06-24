const root = document.getElementById("root");

var counterNumbers = document.getElementById("counterNumbers");
var counterBackup = counterNumbers;

var textTitle = document.getElementById("text");
var textBackup = textTitle;

var button = document.createElement("input");
button.id = "btn";
button.value = "Restart";
button.type = "button";
button.addEventListener("click", () => resetTimer());

var text = document.createElement("div");
text.id = "textGo";
text.innerHTML = "GO!";

window.onload = setTimeout(() => {
    removeCounter();
}, 4000);

function removeCounter() {
    counterNumbers.remove();
    textTitle.remove();

    var btn = button;
    var txt = text;

    root.appendChild(txt);
    root.appendChild(btn);
}

function resetTimer() {
    counterNumbers = counterBackup;
    textTitle = textBackup;

    var btn = document.getElementById("btn");
    btn.remove();

    var txt = document.getElementById("textGo");
    txt.remove();

    root.appendChild(counterNumbers);
    root.appendChild(textTitle);

    setTimeout(() => {
        removeCounter();
    }, 4000);
}
