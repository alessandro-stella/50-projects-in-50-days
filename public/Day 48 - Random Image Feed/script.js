const images = document.getElementsByClassName("image");

window.onload = async () => {
    let randomIndex = Math.floor(Math.random() * 10);

    await $.ajax({
        url: `https://picsum.photos/v2/list?page=${randomIndex}&limit=30`,
        dataType: "json",
        success: function (data) {
            for (let i = 0; i < 30; i++) {
                images[
                    i
                ].style.backgroundImage = `url(${data[i].download_url})`;
            }
        },
    });
};
