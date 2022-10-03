import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome/welcome';
import PokemonList from './component/pokemon-list/pokemon-list';
import { nanoid } from "nanoid"
import Alert from './component/alert/alert';
import Toggle from './component/toggle/toggle';

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
      <h2>Mes listes</h2>
      {/* <Welcome name="Pierre" lastName="Bourdieu"></Welcome>
      <Welcome name="Pierre" red={true}></Welcome>
      <Welcome name={45}></Welcome> */}
      {/* <Welcome personne={{name: "Pierre", lastName: "Bourdieu"}}></Welcome> */}
      <PokemonList pokemons={pokemons}></PokemonList>
      <h2>Mon alerte</h2>
      <Alert></Alert>
      <h2>Mon Toggle</h2>
      <Toggle/>
    </div>
  );
}

export default App;
