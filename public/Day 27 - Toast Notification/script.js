var main = document.getElementById("main");

function newNotification() {
    var notification = document.createElement("div");
    notification.innerHTML = "NOTIFICA!";
    notification.classList = "not n" + generateRandomInteger(7);

    main.appendChild(notification);

    setInterval(() => {
        main.removeChild(notification);
    }, 2500);
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}
