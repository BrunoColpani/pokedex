const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const generatePokemonPromisses = () => Array(151).fill().map((_, index) =>
    fetch(getPokemonUrl(index + 1)).then(response => response.json()))

const generateHTML = pokemons => pokemons = pokemons.reduce((accumulator, pokemon) => {
    const types = pokemon.types.map(typeInfo => typeInfo.type.name)
    const abilities = pokemon.abilities.map(abilytiInfo => abilytiInfo.ability.name)

    accumulator += `<li class="card  ${types[0]}">
            <img class="card-image" alt="${pokemon.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png"/>
            <h2 class="card-title">${pokemon.id} - ${pokemon.name}</h2>
           <p class="card-subtitle">Type: ${types.join(' | ')}</p>
           <p class="card-subtitle">Abilities: ${abilities.join(' | ')}</p>
            </li>`

    return accumulator
}, '')




    const insertPokemonsIntoPage = pokemons => {
        const ul = document.querySelector('[data-js="pokedex"]')
        ul.innerHTML = pokemons
    }


const pokemonPromisses = generatePokemonPromisses()

Promise.all(pokemonPromisses)
    .then(generateHTML)
    .then(insertPokemonsIntoPage)


