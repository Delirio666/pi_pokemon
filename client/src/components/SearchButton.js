import React from 'react';
import './styles/SearchButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const search = <FontAwesomeIcon icon={faSearch} />

const Button = ({title,icon,handleClick}) => {

    return (
        <button className='searchButtonContainer' onClick={handleClick}>
            <p>{icon==='search' && search}</p>
            {title}
        </button>
          );
}
 
export default Button;