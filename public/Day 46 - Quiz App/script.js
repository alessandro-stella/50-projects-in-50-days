const form = document.getElementsByTagName("form")[0];
const title = document.getElementsByClassName("title")[0];
const options = document.getElementsByClassName("option");
const labels = document.getElementsByTagName("label");

let questionNumber = 0;
let correctAnswers = 0;

const questions = [
    {
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        answer: "JavaScript",
    },

    {
        question: "What does CSS stand for?",
        options: [
            "Central Style Sheets",
            "Cascading Style Sheets",
            "Cascading Simple Sheets",
            "Cars SUVs Sailboats",
        ],
        answer: "Cascading Style Sheets",
    },

    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hypertext Markdown Language",
            "Hyperloop Machine Language",
            "Helicopters Terminals Motorboats Lamborginis",
        ],
        answer: "Hypertext Markup Language",
    },

    {
        question: "What year was JavaScript launched?",
        options: ["1996", "1995", "1994", "none of the above"],
        answer: "1995",
    },
];

window.onload = () => {
    loadQuestion();
};

form.addEventListener("submit", (e) => {
    e.preventDefault();

    questionNumber++;
    checkAnswer();

    if (questionNumber <= 3) {
        loadQuestion();
    } else {
        getResults();
    }
});

function loadQuestion() {
    title.innerHTML = questions[questionNumber].question;

    for (let i = 0; i < 4; i++) {
        options[i].value = questions[questionNumber].options[i];
        options[i].checked = false;

        labels[i].innerHTML = questions[questionNumber].options[i];
    }
}

function checkAnswer() {
    let answer = document.querySelector('input[name="answer"]:checked').value;

    if (answer === questions[questionNumber - 1].answer) {
        correctAnswers++;
    }
}

function getResults() {
    form.innerHTML = `You scored ${correctAnswers}/4 correct answers`;

    let newButton = document.createElement("button");
    newButton.innerHTML = "Reset";

    newButton.addEventListener("click", () => {
        location.reload();
    });

    form.appendChild(newButton);
}
