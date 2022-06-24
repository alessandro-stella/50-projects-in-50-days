const URL = "https://api.github.com/users/";
var search = document.getElementById("search");
var card = document.getElementById("card");

async function getUserInfo(name) {
    try {
        const userData = await axios(URL + name);
        
        createCard(userData);
    } catch (error) {
        if(error.response.status == 404)
            createErrorCard("User not found");
    }
}

function createCard(user) {
    const cardHTML = `
        <img src="${user.avatar_url}" alt="${user.name}" class="avatar">

        <div class="userInfo">
            <div class="username">
                ${user.name}
            </div>

            <div class="bio">
                ${user.bio}
            </div>

            <ul>
                <li>${user.followers}</li>
                <li>${user.following}</li>
                <li>${user.public_repos}</li>
            </ul
        </div>

        <div class="repos"></div>`;

        card.innerHTML = cardHTML;
}

function createErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `

    main.innerHTML = cardHTML
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const user = search.value;

    if(user) {
        getUserInfo(user);

        search.value = '';
    }
})