import React from 'react';
import './styles/Header.css'
import logo from '../poke-logo.png'
import logoText from '../pokemon.png'

const Header = () => {
    return ( 
        <div className='headerContainer'>
        <div className='leftSection'>
            <div className='logoText' />
        </div>
        <div className='searchBarSection'>
            <img className='logo' src={logo} alt='pokemonLogo'/>
            <input type='text' className='searchBar' placeholder='Search pokemon by name'/>
         </div>
        <div className='rightSection'>
            <img className='logoText' src={logoText} alt='logo text'/>
        </div>
        </div>
     );
}
 
export default Header;
