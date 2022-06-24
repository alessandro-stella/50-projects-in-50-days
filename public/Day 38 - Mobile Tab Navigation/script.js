const image = document.getElementsByClassName("image")[0];
const iconContainers = document.getElementsByClassName(
    "phone-tab__icon-container"
);

function changeImage(section) {
    image.style = `background-image: url('img/${section}.jpg')`;

    for (const singleIconContainer of iconContainers) {
        singleIconContainer.classList.remove("active");
    }
}
