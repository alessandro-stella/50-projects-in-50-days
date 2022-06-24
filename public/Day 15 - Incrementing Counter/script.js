var numberText = document.getElementsByClassName("number");

window.onload = () => {
    var counters = [3];

    for (let i = 0; i < 3; i++) {
        counters[i] = Math.floor(Math.random() * (99500 + 1) + 500);
        console.log(counters[i]);
    }

    var max = Math.max(counters[0], counters[1], counters[2]);

    for (let i = 0; i <= max; i++) {
        setTimeout(() => {
            if (i <= counters[0]) {
                numberText[0].innerHTML = i;
            }

            if (i <= counters[1]) {
                numberText[1].innerHTML = i;
            }

            if (i <= counters[2]) {
                numberText[2].innerHTML = i;
            }
        }, 10);
    }
};
