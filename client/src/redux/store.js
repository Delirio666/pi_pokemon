import {createStore, applyMiddleware} from 'redux'
import {PokemonsReducer} from './PokemonsReducer'
import thunk from 'redux-thunk'

const store = createStore(PokemonsReducer, applyMiddleware(thunk))

export default store