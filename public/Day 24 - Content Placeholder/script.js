var card = document.getElementById("card");
var image = document.getElementById("image");

window.onload = () => {
    setTimeout(() => {
        card.innerHTML =
            "<img id='image' src='image.png' alt='A cool looking sunset'><div id='text'><div class='title'>A cool looking sunset</div>During one of his trips, the famous photographer Alessandro Stella immortalized this beautiful sunset by the sea</div><div id='profile'><img src='profile.png' alt='Alessandro Stella'><div class='profileText'><div class='title'>Alessandro Stella</div>Someone who enjoy the the little good things in life</div></div>";
    }, 3000);
};
