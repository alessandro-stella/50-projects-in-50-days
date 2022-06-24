const root = document.getElementById("root");
const timer = document.getElementsByClassName("timer")[0];
const scoreCounter = document.getElementsByClassName("score")[0];
let score = 0;

const gameContainer = document.getElementsByClassName("game")[0];

let insect = document.createElement("img");
insect.classList = "new-insect";

let pageCounter = 1;
let time = 0;

function nextPage() {
    let currentPage = "page" + pageCounter;
    pageCounter++;
    let newPage = "page" + pageCounter;

    root.classList.remove(currentPage);
    root.classList.add(newPage);
}

function setInsect(chosenInsect) {
    insect.src = "./img/" + chosenInsect + ".png";

    nextPage();
    startGame();
}

function startGame() {
    startTimer();
    addInsect();
}

function addInsect() {
    let newInsect = insect.cloneNode(true);

    newInsect.addEventListener("click", () => {
        score++;
        scoreCounter.innerHTML = "Score: " + score;

        newInsect.classList.add("dissolving");

        setTimeout(() => {
            newInsect.remove();
        }, 500);

        setTimeout(() => {
            addInsect();
        }, 500);

        setTimeout(() => {
            addInsect();
        }, 750);
    });

    let positionFromTop = randomValue(95, 5) + "vh";
    let positionFromLeft = randomValue(95, -5) + "vw";
    let rotation = randomValue(45, -45);

    newInsect.style.top = positionFromTop;
    newInsect.style.left = positionFromLeft;
    newInsect.style.transform =
        newInsect.style.transform + "scale(1) rotate(" + rotation + "deg)";

    gameContainer.appendChild(newInsect);
}

function startTimer() {
    setTimeout(() => {
        setInterval(() => {
            time++;

            let minutes = Math.floor(time / 60);
            let seconds = time - minutes * 60;

            if (minutes < 10) {
                minutes = "0" + minutes;
            }

            if (seconds < 10) {
                seconds = "0" + seconds;
            }

            let finalTime = minutes + ":" + seconds;
            timer.innerHTML = "Time: " + finalTime;
        }, 1000);
    }, 1000);
}

function randomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
