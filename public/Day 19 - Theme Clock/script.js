var main = document.getElementById("main");
var clock = document.getElementById("clock");
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var pin = document.getElementById("pin");
var clockTime = document.getElementById("clockTime");
var date = document.getElementById("date");

var weekDays = [
    "Lunedì",
    "Martedì",
    "Mercoledì",
    "Giovedì",
    "Venerdì",
    "Sabato",
    "Domenica",
];

var months = [
    "Gennaio",
    "Febbraio",
    "Marzo",
    "Aprile",
    "Maggio",
    "Giugno",
    "Luglio",
    "Agosto",
    "Settembre",
    "Ottobre",
    "Novembre",
    "Dicembre",
];

window.onload = () => {
    updateTime();

    setInterval(() => {
        updateTime();
    }, 1000);
};

function updateTime() {
    var time = new Date();
    var currentHour = time.getHours();
    var currentMinute = time.getMinutes();
    var currentSecond = time.getSeconds();

    var currentWeekDay = time.getDay();
    var currentDay = time.getDate();
    var currentMonth = time.getMonth();

    hours.style.transform =
        "translateX(50%) rotate(" + (30 * currentHour - 90) + "deg)";
    minutes.style.transform =
        "translateX(50%) rotate(" + (6 * currentMinute - 90) + "deg)";
    seconds.style.transform =
        "translateX(50%) rotate(" + (6 * currentSecond - 90) + "deg)";

    if (currentSecond < 10) {
        currentSecond = "0" + currentSecond;
    }

    clockTime.innerHTML =
        currentHour + ":" + currentMinute + ":" + currentSecond;
    date.innerHTML =
        weekDays[currentWeekDay] +
        " " +
        currentDay +
        " " +
        months[currentMonth];
}

function changeTheme(theme) {
    theme.classList.toggle("dark");

    if (theme.innerHTML == "Dark Theme") {
        theme.innerHTML = "Light Theme";
    } else {
        theme.innerHTML = "Dark Theme";
    }

    main.classList.toggle("dark");
    clock.classList.toggle("dark");
    hours.classList.toggle("dark");
    minutes.classList.toggle("dark");
    seconds.classList.toggle("dark");
    clockTime.classList.toggle("dark");
    date.classList.toggle("dark");
    pin.classList.toggle("dark");
}
