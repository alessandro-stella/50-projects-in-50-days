var questions = document.getElementsByClassName("question");

function openQuestion(q) {
    q--;

    questions[q].classList.toggle("open");
}
