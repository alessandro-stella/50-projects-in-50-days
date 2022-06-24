const label = document.getElementsByClassName("label")[0];

function moveLabel(value) {
    label.innerHTML = value;

    value = (42.5 / 100) * value - 5;

    label.style.transform = `translateX(calc((calc(${value}em + 2px) / 2) + 0.75em))`;
}
