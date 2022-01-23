import React,{useState, useEffect} from 'react';
import './styles/Pokemons.css'
import {connect} from 'react-redux'
import Card from '../components/Card'
import Header from '../components/Header'
import ButtonContainer from '../components/ButtonContainer'
import Form from '../components/Form'
import axios from "axios"
import { orderAlfASC, orderAlfDESC, orderStrengthASC, orderStrengthDESC, filterByType, createdOnDB, searchByName, getAllPokemons } from '../redux/actions';

    const Pokemons = ({value,dispatch, pokemons}) => {
        const [toggleForm, setToggleForm] = useState(false)
        useEffect(async () => {
            const result = await axios.get("http://localhost:3001/pokemons")
            console.log(result);
            return dispatch({
                type:'GET_ALL_POKEMONS',
                payload: result.data
            });
        })

        const onSearch = () =>{
            dispatch(getAllPokemons())
        }

        const onToggleForm = () =>{
            setToggleForm(!toggleForm)
        }

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
                <Header onToggleForm={onToggleForm} value={toggleForm} onSearch={onSearch}/>
                <div className='Container'>
                    <div className='form'>
                        {toggleForm && <Form/>}
                    </div>

                    <div>
                        <ButtonContainer onASC={onASC} onDESC={onDESC} onStrengthASC={onStrengthASC} onStrengthDESC={onStrengthDESC}/>
                    </div>                   
                   
                    {
                        pokemons.map((e) => (<Card key={e.id} name={e.name} type='water' pic={e.sprite} />))
                    }
                    

                     <div className='home__row'>
                        <Card name='BULBASAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'/>
                        <Card name='IVYSAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'/>
                        <Card name='CHLOROPHYLL' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'/>
                        <Card name='BULBASAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'/>
                    </div>

                    <div className='home__row'>
                    <Card name='BULBASAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg'/>
                        <Card name='IVYSAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'/>
                        <Card name='CHLOROPHYLL' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg'/>
                        <Card name='BULBASAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg'/>
                    </div>

                    <div className='home__row'>
                        <Card name='BULBASAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg'/>
                        <Card name='IVYSAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg'/>
                        <Card name='CHLOROPHYLL' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg'/>
                        <Card name='BULBASAUR' type='water' pic='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg'/>
                    </div> 
                </div>
            </div>
        );
    }

    function mapStateToProps(state){
        console.log(state);
        return {
            pokemons: state.pokemons,
        }
    }
    
    export default connect (mapStateToProps)(Pokemons);