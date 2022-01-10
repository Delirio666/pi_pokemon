import React from 'react';
import Button from './Button'
import './styles/ButtonContainer.css'

const ButtonContainer = ({onASC, onDESC, onStrengthASC, onStrengthDESC}) => {
    const onHandleASC = () =>{
        onASC()
    }

    const onHandleDESC = () =>{
        onDESC()
    }

    const onHandleStrengthASC = () =>{
        onStrengthASC()
    }

    const onHandleStrengthDESC = () =>{
        onStrengthDESC()
    }

    return ( 
        <div className='buttonContainer'>
            <Button title='Order Asc' icon='up' handleClick={onHandleASC}/>
            <Button title='Order Desc' icon='down' handleClick={onHandleDESC}/>
            <Button title='By Strength Asc'icon='up' handleClick={onHandleStrengthASC}/>
            <Button title='By Strength Desc' icon='down' handleClick={onHandleStrengthDESC}/>
        </div>
     );
}
 
export default ButtonContainer;