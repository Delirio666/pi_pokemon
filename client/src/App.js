import './App.css';
import pokemonImage from './pokemonFriends.png'

function App(props) {
  return (
    <div className="App">
      <img src={pokemonImage} alt='pokemon friends' width={500} alt='pokemon friends'/>
    </div>
  );
}

export default App;