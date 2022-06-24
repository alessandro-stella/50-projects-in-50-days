window.onload = function () {
    var main = document.getElementById("main");
    var background = document.getElementById("background");
    var loading = document.getElementById("counter");
    var counter = 33;

    var random = Math.ceil(Math.random() * 10);
    var backgroundImage = "url(media/sfondo" + random + ".jpg)";

    main.style.background = backgroundImage;
    background.style.background = backgroundImage;

    var load = setInterval(() => {
        loading.innerHTML = counter + "%";
        var test = "blur(" + (20 - counter / 5) + "px)";

        background.style.filter = test;

        if (counter == 100) {
            setTimeout(() => {
                loading.innerHTML = "";
            }, 250);

            clearInterval(load);
        }

        counter++;
    }, 25);
};
