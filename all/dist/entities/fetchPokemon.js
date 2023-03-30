import { createPokemonCaraio } from "./createPokemon.js"

export async function fetchPokemonC(){
    const randomPokemon = document.getElementById('generate-poke')
    randomPokemon.addEventListener('click', async function(){
        const randonNumber = Math.floor(Math.random() * 960)
        const urlPooke = `https://pokeapi.co/api/v2/pokemon/${randonNumber}`
        const resp = await fetch(urlPooke)
        const data = await resp.json()
        console.log(data)
        createPokemonCaraio(data)
    })
}

fetchPokemonC()