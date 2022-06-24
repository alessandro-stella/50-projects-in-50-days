const sidebarPanels = document.getElementsByClassName("to-open");

function openMenu() {
    for (const singleSidebarPanel of sidebarPanels) {
        singleSidebarPanel.classList.toggle("open");
    }
}
