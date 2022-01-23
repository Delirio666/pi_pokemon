import React, {useState} from 'react';
import './styles/Header.css'
import logo from '../poke-logo.png'
import logoText from '../pokemon.png'
import SearchButton from './SearchButton'
import axios from 'axios'

const Header = ({onToggleForm, onSearch}) => {
    const [query, setQuery] = useState('')

    const onHandleChange = (e) =>{
        setQuery(e.target.value)
    }
    
    const onHandleSearch = async() =>{
        /* onSearch(query)  */
        /* const pokemons = await axios.get('http://localhost:3001/pokemons')
        console.log(pokemons) */
        onSearch()
    }

    const onHandleToggleForm = () =>{
        onToggleForm()
    }

    return ( 
        <div className='headerContainer'>
            <div className='leftSection'>
                <div className='logoText' />
            </div>
            <div className='searchBarSection'>
                <img className='logo' src={logo} alt='pokemonLogo'/>
                <input type='text' className='searchBar' placeholder='Search pokemon by name' onChange={onHandleChange}/>
                <SearchButton className='searchButton' icon='search' onClick={onHandleSearch}/>
            </div>
            <div className='rightSection'>
                <button className='newPokemonButton' onClick={onHandleToggleForm}>+ New Pokemon</button>
                <img className='logoText' src={logoText} alt='logo text'/>
            </div>
        </div>
     );
}
 
export default Header;
