import useFecthCharacters from "./hooks/useFecthCharacters.js";
import Character from "./Character.jsx";
import './App.css';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  const pokemon = useFecthCharacters(urlPokemon);
  const rick = useFecthCharacters(urlRick);
  
  return (
    <div className="app">
      {
        pokemon &&
        <Character type="Personaje Pokemon" name={pokemon.name} image={pokemon.sprites?.front_default}/> ||
        <p>Error al obtener el personaje de Pokemon</p>
      }
      {
        rick &&
        <Character type="Personaje Rick and Morty" name={rick.name} image={rick.image}/> ||
        <p>Error al obtener el personaje de Rick and Morty</p>
      }
    </div>
  );
}

export default App;
