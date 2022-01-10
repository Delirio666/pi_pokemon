import React from 'react';
import './styles/Card.css'

const Card = ({name,pic,type}) => {
    return ( 
        <div className='container'>
            <img className='pokemonPic' alt='pokemon pic' src={pic}/>
            <div className="pokemonInfo">
                    <strong>{name}</strong>
                    <h5>Type: {type}</h5>
            </div>
        </div> 
    );
}
 
export default Card;