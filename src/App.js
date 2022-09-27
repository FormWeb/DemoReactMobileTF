import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome/welcome';
import PokemonList from './component/pokemon-list/pokemon-list';
import { nanoid } from "nanoid"
import Alert from './component/alert/alert';

function App() {

  const pokemons = [
    {
      id: nanoid(),
      name: "Salameche"
    },
    {
      id: nanoid(),
      name: "Carapuce"
    },
    {
      id: nanoid(),
      name: "Bulbizarre"
    }
  ]

  return (
    <div className="App">
      <h1>Mon titre</h1>
      {/* <Welcome name="Pierre" lastName="Bourdieu"></Welcome>
      <Welcome name="Pierre" red={true}></Welcome>
      <Welcome name={45}></Welcome> */}
      {/* <Welcome personne={{name: "Pierre", lastName: "Bourdieu"}}></Welcome> */}
      <PokemonList pokemons={pokemons}></PokemonList>
      <Alert></Alert>
    </div>
  );
}

export default App;
