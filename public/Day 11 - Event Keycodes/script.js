window.onload = () => {
    var hidden = true;
    var start = document.getElementById("start");

    var key = document.getElementById("key");
    var keyCode = document.getElementById("keyCode");
    var code = document.getElementById("code");

    document.addEventListener("keydown", (keyPressed) => {
        if (hidden) {
            start.classList.add("hidden");
            hidden = false;
        }

        if (keyPressed.code == "Space") {
            key.innerHTML = "Space";
        } else {
            key.innerHTML = keyPressed.key;
        }

        keyCode.innerHTML = keyPressed.keyCode;
        code.innerHTML = keyPressed.code;
    });
};
