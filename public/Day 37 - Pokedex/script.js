const root = document.getElementById("pokedex");

window.onload = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150")
        .then((res) => res.json())
        .then((pokemon) => {
            pokemon.results.forEach((element) => {
                fetchPokemonData(element.url);
            });
        })
        .catch((err) => console.log(err));
};

function fetchPokemonData(url) {
    fetch(url)
        .then((res) => res.json())
        .then((pokemonData) => {
            createPokemonCard(pokemonData);
        })
        .catch((err) => console.log(err));
}

function createPokemonCard(pokemonInfo) {
    var name =
        pokemonInfo.name.charAt(0).toUpperCase() + pokemonInfo.name.slice(1);
    var id = pokemonInfo.id;
    var sprite = pokemonInfo.sprites.front_default;
    var type = [];

    for (singleType of pokemonInfo.types) {
        type.push(singleType.type.name);
    }

    var pokeCard = document.createElement("div");
    pokeCard.classList = "pokeCard";

    var pokeName = document.createElement("div");
    pokeName.classList = "pokeName";
    pokeName.innerHTML = name;

    var pokeId = document.createElement("div");
    pokeId.classList = "pokeId";

    switch (id.toString().length) {
        case 1:
            pokeId.innerHTML = "#00" + id;

            break;

        case 2:
            pokeId.innerHTML = "#0" + id;

            break;

        case 3:
            pokeId.innerHTML = "#" + id;
            break;

        default:
            pokeId.innerHTML = "NEGRO";
            break;
    }

    var pokeSprite = document.createElement("img");
    pokeSprite.classList = "pokeSprite";
    pokeSprite.src = sprite;
    pokeSprite.alt = name;

    pokeCard.appendChild(pokeSprite);
    pokeCard.appendChild(pokeName);
    pokeCard.appendChild(pokeId);

    var types = document.createElement("div");
    types.classList = "pokeTypes";

    pokeCard.classList += " " + type[0] + "Bg";

    for (singleType of type) {
        var pokeType = document.createElement("div");
        pokeType.classList = "pokeType " + singleType;
        pokeType.innerHTML = singleType;

        types.appendChild(pokeType);
    }

    pokeCard.appendChild(types);

    root.appendChild(pokeCard);
}
