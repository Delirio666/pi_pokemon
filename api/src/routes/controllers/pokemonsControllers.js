const axios = require('axios')
const {Pokemon, Type} = require('../../db')
const { Op } = require("sequelize");
const mockData = require('../../../../client/src/mockData.json')

const getPokemonsAPI = async() =>{
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
    const { results } = response.data;
    let subQueries = [];
         
    for (const e of results) {
        const {data} = await axios.get(`${e.url}`);
        const {id, name, types} = data;
        var pokemon =  { name, id, types: types.map(e => e.type.name), sprite: data.sprites.front_default }  
        subQueries.push(pokemon)
    };   

    return subQueries;
}

const getPokemonsDB = async () =>{
    const results = await Pokemon.findAll()
    return results.map((e) => ({ name: e.name, id: e.id, types: e.types, sprite: e.sprite}))
}

async function getAllPokemons(req,res){

    const name = req?.query?.name?.trim();
    if(!name){
        const pokemonsAPI = await getPokemonsAPI();
        const pokemonsDB = await getPokemonsDB();
        res.status(200).json(pokemonsAPI.concat(pokemonsDB));
    } else {
        const pokemonByName = await getPokemonByName(name);
        res.status(200).json(pokemonByName);
    }    
}

async function getPokemonById(req,res){
    console.log('url pokemons/:id')
    const id = req.params.id.trim();
    let status, pokemon;
    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).catch(
        (error) => {
          console.log(error)
          status = error.response.status;
        }
      )

    if(result){
      const {data} = result;
      pokemon =  {
                id: data.id,
                name: data.name,
                hp: data.stats[0].base_stat,
                strength: data.stats[1].base_stat,
                defense: data.stats[2].base_stat,
                speed: data.stats[5].base_stat,
                height: data.height,
                weight: data.weight,
                sprite: data.sprites.front_default,
                types: data.types.map((e) => e.type.name),
            }
    } else if(status === 404){
        console.log('search on db')     
        try{
            pokemon = await Pokemon.findByPk(id);       
        } catch(err) {
            console.log(err)
        }
        if(!pokemon){
            res.status(404).send('Not Found')
        }
    } 

    res.status(200).json(pokemon);
}

async function getPokemonByName(name) {  
    let status, pokemon;
    let result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).catch(
        (error) => {
          console.log(error)
          status = error.response.status;
        }
      )

      if(result){
        const {data} = result;
        pokemon =  {
                  id: data.id,
                  name: data.name,
                  hp: data.stats[0].base_stat,
                  strength: data.stats[1].base_stat,
                  defense: data.stats[2].base_stat,
                  speed: data.stats[5].base_stat,
                  height: data.height,
                  weight: data.weight,
                  sprite: data.sprites.front_default,
                  types: data.types.map((e) => e.type.name),
              }
      } else if(status === 404){
          console.log('search on db')     
          try{
              pokemon = await Pokemon.findAll({  where: { name:name} });       
          } catch(err) {
              console.log(err)
          }
          if(!pokemon){
              res.status(404).send('Not Found')
          }
      } 
      return pokemon;
}


async function getPokemonTypes(req,res){
    console.log('url pokemons/types')
    let types = await Type.findAll();

    if (types?.length == 0)
    {
        console.log('saving on data base')
        const typesUrl = await axios.get('https://pokeapi.co/api/v2/type')
        const typeNames = typesUrl?.data?.results.map(e => e.name)
    
        typeNames.forEach(e =>{
            if(e){
                Type.findOrCreate({
                    where: {name:e}
                })
            }
        })

        types = await Type.findAll();
    }
        
    res.status(200).json(types)
}

async function postPokemon(req,res){
    let { 
        id,
        name,
        hp,
        strength,
        defense,
        speed,
        height,
        weight,
        sprite,
        types  
     } = req.body;

     if(!name)
        res.status(400).send();

    const [pokemon, created] = await Pokemon.findOrCreate({
        where: { name: name },
        defaults: {
            id,
            name,
            hp,
            strength,
            defense,
            speed,
            height,
            weight,
            sprite,
            types
            }
      });

      if(created)
        res.status(200).json(pokemon);
     else
        res.status(400).send();
}

module.exports = {getAllPokemons, getPokemonById, getPokemonTypes, postPokemon}