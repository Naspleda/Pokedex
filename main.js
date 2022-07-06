const pokemonContainer = document.querySelector(".pokemon-container");
const spinner = document.querySelector("spinner");
const previous = document.querySelector("#previous");
const next = document.querySelector("#next");

let offset = 1;
let limit = 8;

previous.addEventListener("click", () => {
    offset -= 9;
    fetchPokemons(offset, limit);
});

next.addEventListener("click", () => {
    offset += 9;
    fetchPokemons(offset, limit);
});


function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then ((res) => res.json())
    .then ((data) => {
        createPokemon(data);
    });
}

function fetchPokemons(offset, limit){
    for (let i = offset; i <= offset + limit; i++){
        fetchPokemon(i);
    }
}

function createPokemon(pokemon){
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spritesContainer = document.createElement('div');
    spritesContainer.classList.add('img-container');

    const sprite = document.createElement('img');
    sprite.src = pokemon.sprites.front_default;

    spritesContainer.appendChild(sprite);

    const number= document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3,0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    card.appendChild(spritesContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);

}

    fetchPokemons(offset,limit);