import './App.css';
import pokemonImage from './pokemonFriends.png'
import Button from './components/Button'

function App(props) {
  return (
    <div className="App">
      <img src={pokemonImage} alt='pokemon friends' width={500} alt='pokemon friends'/>
      <Button title='Home'/>
    </div>
  );
}

export default App;