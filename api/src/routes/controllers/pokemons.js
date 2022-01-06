const axios = require('axios')
const { Router } = require('express');
const router = Router();
const {Pokemon, Type} = require('../../db')



const getPokemonApi = async () =>{
    const getPokemonUrl = await axios.get('https://pokeapi.co/api/v2/pokemon')
    return getPokemonUrl
}

const getPokemonDB = async () =>{
    return await Pokemon.findAll({
        include:{
            model:Type,
            attributes:['name'],
            trough:{
                attributes: []
            }
        }
    })
}

const getAllPokemons = async() =>{
    const fromApi = await getPokemonApi()
    const fromDB = await getPokemonDB()
    
    const pokemonTotal = fromApi.data.results.concat(fromDB)

    return pokemonTotal
}





router.get('/pokemons', async (req,res)=>{
    const name = req.query.name
    const pokemonArray = []

    const response = await getAllPokemons()
          response.map(e =>pokemonArray.push(e.name))

          
          if (name){
              let pokemonName = await pokemonArray.filter(pokemon => pokemon.toLowerCase().includes(name.toLowerCase()))
              pokemonName.length ? 
              res.status(200).send(pokemonName):
              res.status(404).send(`No existe el Pokemon: ${name} `)
            } else {
                res.status(200).send(pokemonArray)
            } 
})

router.get('/pokemons/:idPokemon', async (req,res)=>{
    const response = await getPokemonApi()
    response.data.results.map(e => console.log(e.name))

    const fetchUrl = async() => await response.map(e => axios.get(e.url))
})

module.exports = router;