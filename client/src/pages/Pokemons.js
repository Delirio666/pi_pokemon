import React from 'react';
import './styles/Pokemons.css'
import {connect} from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'
import ButtonContainer from '../components/ButtonContainer'

import { orderAlfASC, orderAlfDESC, orderStrengthASC, orderStrengthDESC, filterByType, createdOnDB } from '../redux/actions';

const Pokemons = ({value,dispatch}) => {
    const onASC = () =>{
        dispatch(orderAlfASC())
    }

    const onDESC = () =>{
        dispatch(orderAlfDESC())
    }

    const onStrengthASC = () =>{
        dispatch(orderStrengthASC())
    }

    const onStrengthDESC = () =>{
        dispatch(orderStrengthDESC())
    } 

    return ( 
        <div className='body'>
            <Header/>
            <div className='Container'>
                <div>
                    <ButtonContainer onASC={onASC} onDESC={onDESC} onStrengthASC={onStrengthASC} onStrengthDESC={onStrengthDESC}/>
                </div>

                <div className='pokemons'>
                    <Card name='BULBASAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'/>
                    <Card name='IVYSAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'/>
                    <Card name='CHLOROPHYLL' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'/>
                    <Card name='BULBASAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'/>
                    <Card name='CHLOROPHYLL' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'/>
                </div>
                <p>{value}</p>
            </div>
        </div>
     );
}

function mapStateToProps(state){
    return {
      value: state.value,
    }
  }
 
export default connect (mapStateToProps)(Pokemons);