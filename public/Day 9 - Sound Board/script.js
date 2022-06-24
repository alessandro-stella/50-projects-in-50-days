var background = document.body;
var stop = false;
var song = "";
var audio = "";

window.onload = () => {
    background.style.backgroundImage = "url('media/background.jpg')";
};

function play(name) {
    if (song != "") {
        audio.pause();

        if (song.includes(name)) {
            background.style.backgroundImage = "url('media/background.jpg')";
            song = "";
            return;
        }
    }

    song = "media/audio/" + name + ".mp3";

    var image = "url(media/image/" + name + ".jpg)";

    background.style.backgroundImage = image;

    audio = new Audio(song);
    audio.play();
}
