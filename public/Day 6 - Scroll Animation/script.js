var cards = document.querySelectorAll(".card");

window.onload = entry();

function entry() {
    var windowBottom = (window.innerHeight / 5) * 4;

    for (let i = 0; i < cards.length; i++) {
        var cardTop = cards[i].getBoundingClientRect().top;

        if (cardTop < windowBottom) {
            cards[i].classList.add("shown");
        } else {
            cards[i].classList.remove("shown");
        }
    }
}
