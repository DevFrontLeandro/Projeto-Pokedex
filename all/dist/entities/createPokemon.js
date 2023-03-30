const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    eletric: '#FC7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5s5s4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}
const mainTypes = Object.keys(colors)

export function createPokemonCaraio(pokemon){
    document.querySelector('#result').innerHTML = ''
    const card = document.createElement('div')
    card.classList.add('divPoke')

    //Image Pokemon
    const spriteContainer = document.createElement('div')
    spriteContainer.classList.add('img-container')
    const sprite = document.createElement('img')
    sprite.src = pokemon.sprites.other.home.front_default
    spriteContainer.append(sprite)

    //Nome do pokemon
    const nameDiv = document.createElement('div')
    nameDiv.classList.add('name-Poke')
    const first = document.createElement('p')
    first.classList.add('first-name')
    first.textContent = 'Nome:'
    const name = pokemon.name
    const namePoke = document.createElement('p')
    namePoke.classList.add('name-poke')
    namePoke.textContent = name
    nameDiv.append(first,namePoke)

    //Peso do Pokemon
    const weight = document.createElement('div')
    weight.classList.add('name-Poke')
    const type = document.createElement('p')
    type.classList.add('first-name')
    type.textContent = 'Peso:'
    const typePokemon = pokemon.weight
    const typePoke = document.createElement('p')
    typePoke.classList.add('name-poke')
    typePoke.textContent = typePokemon
    weight.append(type,typePoke)

    //Altura do Pokemon
    const  height = document.createElement('div')
    height.classList.add('name-Poke')
    const heightPoke = document.createElement('p')
    heightPoke.classList.add('first-name')
    heightPoke.textContent = 'Altura:'
    const heightPokePokemon = pokemon.height
    const heightPokePoke = document.createElement('p')
    heightPokePoke.classList.add('name-poke')
    heightPokePoke.textContent = heightPokePokemon
    height.append(heightPoke, heightPokePoke)

    // ID do Pokemon
    const  id = document.createElement('div')
    id.classList.add('name-Poke')
    const idPoke = document.createElement('p')
    idPoke.classList.add('first-name')
    idPoke.textContent = 'ID:'
    const idPokePokemon = pokemon.id
    const idPokePoke = document.createElement('p')
    idPokePoke.classList.add('name-poke')
    idPokePoke.textContent = `#${idPokePokemon}`
    id.append(idPoke, idPokePoke)

    // Tipo do Pokemon
    const  types = document.createElement('div')
    types.classList.add('name-Poke')
    const typesPoke = document.createElement('p')
    typesPoke.classList.add('first-name')
    typesPoke.textContent = 'Tipo:'
    const typesPokePokemon = pokemon.types[0].type.name
    const typesPokePoke = document.createElement('p')
    typesPokePoke.classList.add('name-poke')
    typesPokePoke.textContent = typesPokePokemon
    types.append(typesPoke, typesPokePoke)

    // BackGround da cor do tipo do Pokemon Segundo colors
    const pokeType = pokemon.types.map(type => type.type.name)
    const tyype = mainTypes.find(type => pokeType.indexOf(type) > -1)
    const color = colors[tyype]
    
    const changeColor = document.getElementById('color-pokemon')
    changeColor.style.background = color

    card.append(spriteContainer, nameDiv, weight, height, types, id)
    document.querySelector('#result').append(card)
}