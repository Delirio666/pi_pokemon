import axios from 'axios'

export function getAllPokemons(){
    return async function(dispatch){
        const pokemons = await axios.get('http://localhost:3001/pokemons')
        console.log(pokemons)
        return dispatch({
            type:'GET_ALL_POKEMONS',
            payload: pokemons.data
        })
    }
}

export function searchByName(name){
    return async function(dispatch){
        const pokemonName = axios.get(`http://localhost:3001/pokemons?name=${name}`)
        return dispatch({
            type:'SEARCH_BY_NAME',
            payload: pokemonName.data
        })
    }
}

export function orderAlfASC(){
    return {
        type:'ORDER_ALF_ASC'
    }
}

export function orderAlfDESC(){
    return {
        type:'ORDER_ALF_DESC'
    }
}

export function orderStrengthASC(){
    return {
        type:'ORDER_STRENGTH_ASC'
    }
}

export function orderStrengthDESC(){
    return {
        type:'ORDER_STRENGTH_DESC'
    }
}

export function filterByType(){
    return{
        type:'FILTER_BY_TYPE'
    }
}

export function createdOnDB(){
    return{
        type:'CREATED_ON_DB'
    }
}

