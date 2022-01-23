const initialState = {pokemons:[]}


export function PokemonsReducer(state = initialState, action){
    switch(action.type){
        case 'GET_ALL_POKEMONS':
            return {...state, pokemons:action.payload}
        case 'ORDER_ALF_ASC':
            return {...state,value:'ASC'}

        case 'ORDER_ALF_DESC':
            return {...state,value:'DESC'}

        case 'ORDER_STRENGTH_ASC':
            return {...state,value:'STRENGTH ASC'}

        case 'ORDER_STRENGTH_DESC':
            return {...state,value:'STRENGTH DESC'}

        case 'FILTER_BY_TYPE':
            return {...state,value:'BY TYPE'}

        case 'CREATED_ON_DB':
            return {...state,value:'CREATED ON DB'}
        case 'SEARCH_BY_NAME':
            return {...state, value:action.payload}
        default:
            return state
    }
}
