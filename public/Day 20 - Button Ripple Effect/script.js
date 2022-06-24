var button = document.getElementById("button");
var fontSize = window.getComputedStyle(button).getPropertyValue("font-size");
fontSize = fontSize.substr(0, fontSize.length - 2) / 2;

button.addEventListener("click", (event) => {
    var rippleSpan = document.createElement("div");
    rippleSpan.setAttribute("id", "ripple");

    var positionX = event.clientX - event.target.offsetLeft - 20 * fontSize;
    var positionY = event.clientY - event.target.offsetTop - 20 * fontSize;

    rippleSpan.style.top = positionY + "px";
    rippleSpan.style.left = positionX + "px";

    console.log(fontSize);
    button.appendChild(rippleSpan);

    setTimeout(() => {
        button.removeChild(rippleSpan);
    }, 500);
});
