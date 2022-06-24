const colors = [
    "hsl(350, 70%, 50%)",
    "hsl(299, 70%, 50%)",
    "hsl(270, 70%, 54%)",
    "hsl(211, 70%, 50%)",
    "hsl(78, 70%, 50%)",
];
var checkInterval = false;

window.onload = () => {
    var table = createTable();

    document.getElementById("root").appendChild(table);
};

function createTable() {
    var table = document.createElement("div");
    table.id = "table";

    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            var cell = document.createElement("div");
            cell.classList = "cell";

            cell.addEventListener("mouseenter", function () {
                lightOn(this);
            });
            cell.addEventListener("mouseleave", function () {
                lightOff(this);
            });

            table.appendChild(cell);
        }
    }

    return table;
}

function lightOn(cell) {
    var randomIndex = Math.floor(Math.random() * colors.length);

    cell.style.backgroundColor = colors[randomIndex];
    cell.style.boxShadow = `0 0 2px ${colors[randomIndex]}, 0 0 10px ${colors[randomIndex]}`;
}

function lightOff(cell) {
    cell.style.backgroundColor = "hsl(0, 0%, 20%)";
    cell.style.boxShadow = "none";
}
