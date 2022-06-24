const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f63126360056a71ea0f094ea0018f0cc&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=f63126360056a71ea0f094ea0018f0cc&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

console.log(form);
console.log(search);

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();

    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `
        <img src="${IMG_PATH + poster_path}" alt="${title}">
                
        <div class="movieInfo">
            <div class="title">
                ${title}

                <div class="vote ${getClassByRate(vote_average)}">
                    ${vote_average}
                </div>
            </div>

            <div class="info">
                <div class="overview">Descrizione</div>
                <div class="text">${overview}</div>
            </div>
        </div>
        `;
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm + '"');

        search.value = "";
    } else {
        window.location.reload();
    }
});
