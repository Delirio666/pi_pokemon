import React,{useState} from 'react';
import './styles/Form.css'
import pikachu from '../pikachu.png'

const Form = () => {
    const [error, setError] = useState('')
    const [input, setInput] = useState({
        name:'',
        hp:'',
        strength:'',
        defense:'',
        speed:'',
        height:'',
        weight:'',
        types:[]
    })

    const handleChange = (e) =>{
        setInput({...input,[e.target.name]:e.target.value})
        /* setError(validateInput({[e.target.name]:e.target.value})) */
    }

    const validateInput = (input) =>{
        let error = {};
        if ( !input.name.match(/^[A-Za-z]+$/)){
            error.name = "Name must be a string of characters";
        } else if (input.hp < 0) {
            error.hp = "Height must be a number greater than 0";
        }

        return error
    }

    return ( 
        <div className='formContainer'>
            <h3>Create a new Pokemon</h3>

            <div className='form'>
                <div className='FstSection'>
                            <div className='inputContainer'>
                                <label className='label'>Name</label>
                                <input required className='input' name='name' type='text' placeholder='E.g. Pikachu' value={input.name} onChange={handleChange} />
                                {error.name && <p className='error'>{error.name}</p>}
                            </div>
                        

                            <div className='inputContainer'>
                            <label className='label'>Life</label>
                            <input className='input' name='hp' type='text' placeholder='E.g. 80' value={input.hp} onChange={handleChange} />
                            {error.hp && <p className='error'>{error.hp}</p>}
                            </div>
                        
                        <div className='inputContainer'>
                            <label className='label'>Strength</label>
                            <input className='input' name='strength' type='text' placeholder='100' value={input.strength} onChange={handleChange} />
                            {error.strength && <p className='error'>{error.strength}</p>}
                        </div>
                    
                </div>
                <div className='SndSection'>
                    <label className='label'>Defense</label>
                    <input className='input' name='defense' type='text' placeholder='80' value={input.defense} onChange={handleChange} />
                    {error.defense && <p className='error'>{error.defense}</p>}

                    <label className='label'>Speed</label>
                    <input className='input' name='speed' type='text' placeholder='70' value={input.speed} onChange={handleChange} />
                    {error.speed && <p className='error'>{error.speed}</p>}

                    <label className='label'>Height</label>
                    <input className='input' name='height' type='text' placeholder='7' value={input.height} onChange={handleChange} />
                    {error.height && <p className='error'>{error.height}</p>}

                </div>
                <div className='TrdSection'>
                    <label className='label'>Weight</label>
                    <input className='input' name='weight' type='text' placeholder='65' value={input.weight} onChange={handleChange} />
                    {error.weight && <p className='error'>{error.weight}</p>}
                </div>
                <div className='FourSection'>
                    <img className='pikachu' src={pikachu} alt='pikachu' width='100'/>
                    <input className='submitButton' type='submit'/>
                </div>
            </div>
        </div>
     );
}
 
export default Form;