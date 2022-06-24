function addNote(root) {
    var newNote = document.createElement("div");
    newNote.classList = "note";

    var noteTitle = document.createElement("div");
    var editIcon = document.createElement("i");
    var deleteIcon = document.createElement("i");
    var textField = document.createElement("textarea");

    noteTitle.classList = "noteTitle";
    editIcon.classList = "fas fa-edit";
    deleteIcon.classList = "fas fa-trash-alt";

    textField.classList = "textArea";
    textField.cols = "30";
    textField.rows = "10";

    editIcon.addEventListener("click", () => editNote(textField));
    deleteIcon.addEventListener("click", () => newNote.remove());

    noteTitle.appendChild(editIcon);
    noteTitle.appendChild(deleteIcon);

    newNote.appendChild(noteTitle);
    newNote.appendChild(textField);
    root.appendChild(newNote);
}

function editNote(textField) {
    if (textField.disabled) {
        textField.disabled = false;
        textField.focus();
        return;
    }

    textField.disabled = true;
}
