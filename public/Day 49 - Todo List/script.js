const inputField = document.getElementById("to-do__input");
const toDoContainer = document.getElementsByClassName("to-do__container")[0];

window.oncontextmenu = function () {
    return false;
};

window.onload = () => {
    loadToDo(Object.values(localStorage));
};

function loadToDo(storage) {
    for (const singleToDo of storage) {
        let toDoText = singleToDo;

        if (toDoText.replace(/ /g, "") === "") {
            return;
        }

        let newToDo = document.createElement("div");
        newToDo.classList = "to-do";
        newToDo.innerHTML = toDoText;

        newToDo.addEventListener("click", () => {
            newToDo.classList.toggle("completed");
        });

        $(newToDo).mousedown(function (ev) {
            if (ev.which == 3) {
                removeToDo(newToDo, toDoText);
            }
        });

        toDoContainer.appendChild(newToDo);
    }
}

function createToDo(e) {
    if (e.repeat || e.code !== "Enter") {
        return;
    }

    let toDoText = inputField.value.trim();

    if (toDoText.replace(/ /g, "") === "") {
        return;
    }

    let newToDo = document.createElement("div");
    newToDo.classList = "to-do";
    newToDo.innerHTML = toDoText;

    newToDo.addEventListener("click", () => {
        newToDo.classList.toggle("completed");
    });

    $(newToDo).mousedown(function (ev) {
        if (ev.which == 3) {
            removeToDo(newToDo, toDoText);
        }
    });

    toDoContainer.appendChild(newToDo);
    inputField.value = "";

    localStorage.setItem(getRandomId(), toDoText);
}

function removeToDo(newToDo, text) {
    newToDo.remove();

    console.log(localStorage.length);
    for (const index in localStorage) {
        if (localStorage.hasOwnProperty(index)) {
            console.log(`${index}: ${localStorage[index]}`);

            if (localStorage[index] === text) {
                localStorage.removeItem(index);
            }
        }
    }
}

function getRandomId() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16);
}
