const axios = require('axios')
const { Router } = require('express');
const router = Router();
const {Pokemon, Type} = require('../../db')



const HelperGetPokemonApi = async () =>{
    const pokemons = await axios.get('https://pokeapi.co/api/v2/pokemon')
    return pokemons
}

const HelperGetPokemonDB = async () =>{
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

const HelperGetAllPokemons = async() =>{
    const fromApi = await HelperGetPokemonApi()
    const fromDB = await HelperGetPokemonDB()
    
    const pokemonTotal = fromApi.data.results.concat(fromDB)

    return pokemonTotal
}





async function getAllPokemons(req,res){
    const name = req.query.name
    //const pokemonArray = []

    const response = await HelperGetAllPokemons()
          
          const result = async() => response.map(e =>{
              const helperFetch = await axios.get(`${e.url}`)
              console.log(helperFetch)
              /* const newPokemon = {
                  name: e.name,
                  height:details.data.height,
                  weight:details.data.weight
              }
              console.log(newPokemon)
              return newPokemon */
          })

/*           
            if (name){
              let pokemonName = await pokemonArray.filter(pokemon => pokemon.toLowerCase().includes(name.toLowerCase()))
              pokemonName.length ? res.status(200).send(pokemonName):res.status(404).send(`No existe el Pokemon: ${name} `)
            } else {
                res.status(200).send(pokemonArray)
            }  */
}

async function pokemonById(req,res){
    
    // const fromApi = await HelperGetPokemonApi()
    // res.send(fromApi.data.results[0].url)
    // fromApi.data.results.map(e => {
    //     console.log(e.url)
    // })


    const pokemonDetails = await HelperGetAllPokemons()
    
    Object.keys(pokemonDetails.data).map(e=>{
        console.log(e.abilities)
    })
    
}


async function pokemonTypes(req,res){
    const typesUrl = await axios.get('https://pokeapi.co/api/v2/type')
    const types = typesUrl.data.results
    
    const PokemonTypes = types.map(e => e.name)

    PokemonTypes.forEach(e =>{
        if(e){
            Type.findOrCreate({
                where: {name:e}
            })
        }
    })
    
    const pokemons = await Type.findAll()
    res.status(200).json(pokemons)
}

module.exports = {getAllPokemons, pokemonById, pokemonTypes}