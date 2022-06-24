const blurLayer = document.getElementsByClassName("blurLayer")[0];

function changeBackground(passwordLength) {
    blurLayer.style.backdropFilter = `blur(${12 - passwordLength}px)`;
}
