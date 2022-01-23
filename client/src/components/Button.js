import React from 'react';
import './styles/Button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faSortUp } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

const up =<FontAwesomeIcon icon={faSortUp} />
const down = <FontAwesomeIcon icon={faSortDown} />
const search = <FontAwesomeIcon icon={faSearch} />

const Button = ({title,icon,handleClick}) => {

    return (
        <button className='buttonContainer' onClick={handleClick}>
            <p>{icon==='up' && up}</p>
            <p>{icon==='down' && down}</p>
            <p>{icon==='search' && search}</p>
            {title}
        </button>
          );
}
 
export default Button;