const feedbackContainer =
    document.getElementsByClassName("feedback-container")[0];
const ratings = document.getElementsByClassName("rating");

window.onload = () => {
    for (const singleRating of ratings) {
        singleRating.addEventListener("click", () => {
            for (const rating of ratings) {
                rating.classList.remove("focused");
            }

            singleRating.classList.add("focused");
        });
    }
};

function sendRating() {
    let rating = document
        .getElementsByClassName("focused")[0]
        .getElementsByClassName("rating-text")[0].innerHTML;

    let title = document.createElement("div");
    title.classList = "title";

    let titleIcon = document.createElement("div");
    titleIcon.classList = "title-icon";
    titleIcon.innerHTML = "❤️";

    let titleText = document.createElement("div");
    titleText.classList = "title-text";
    titleText.innerHTML = "Thank you!";

    title.appendChild(titleIcon);
    title.appendChild(titleText);

    let feedback = document.createElement("div");
    feedback.classList = "feedback";
    feedback.innerHTML = "Feedback: " + rating;

    let comment = document.createElement("div");
    comment.classList = "comment";
    comment.innerHTML =
        "We'll use your feedback to improve our <br> customer support";

    feedbackContainer.innerHTML = "";
    feedbackContainer.appendChild(title);
    feedbackContainer.appendChild(feedback);
    feedbackContainer.appendChild(comment);
}
