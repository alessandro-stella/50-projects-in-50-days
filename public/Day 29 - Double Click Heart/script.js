var root = document.getElementById("root");
var image = document.getElementById("image");
var titleHeight = document.getElementById("title").clientHeight;

var counterTitle = document.getElementById("counterTitle");
var counter = 0;
counterTitle.innerHTML = "You liked it " + counter + " times";

const heart = document.createElement("img");
heart.setAttribute("src", "./heart.png");

image.addEventListener("dblclick", (e) => {
    var rect = e.target.getBoundingClientRect();
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    y = y + titleHeight;
    var newHeart = heart;

    newHeart.setAttribute("id", "newHeart");

    newHeart.style.left = x + "px";
    newHeart.style.top = y + "px";

    root.appendChild(newHeart);

    setTimeout(() => {
        root.removeChild(newHeart);
    }, 750);

    counter++;
    counterTitle.innerHTML = "You liked it " + counter + " times";
});
