import logo from './logo.svg';
import './App.css';
import Welcome from './component/welcome/welcome';
import PokemonList from './component/pokemon-list/pokemon-list';
import { nanoid } from "nanoid"
import Alert from './component/alert/alert';
import Toggle from './component/toggle/toggle';
import FormDemo from './component/form-demo/form-demo';
import CounterValue from './component/counter-comm/counter-value';
import { useState } from 'react';
import CounterButton from './component/counter-comm/counter-buttons';

function App() {

  const [counter, setCounter] = useState(0)

  const incrementValue = (incrementation) => {
    setCounter(valeurActuelle => valeurActuelle + incrementation)
  }

  const resetValue = () => {
    setCounter(0)
  }

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
      {/* <h2>Mes listes</h2> */}
      {/* <Welcome name="Pierre" lastName="Bourdieu"></Welcome>
      <Welcome name="Pierre" red={true}></Welcome>
      <Welcome name={45}></Welcome> */}
      {/* <Welcome personne={{name: "Pierre", lastName: "Bourdieu"}}></Welcome> */}
      {/* <PokemonList pokemons={pokemons}></PokemonList>
      <h2>Mon alerte</h2>
      <Alert></Alert>
      <h2>Mon Toggle</h2>
      <Toggle/> */}
      {/* <h2>Mon from</h2>
      <FormDemo></FormDemo> */}
      <h2>Mon Counter Comm</h2>
      <CounterValue value={counter}></CounterValue>
      <CounterButton incrementation={1}
        onIncrement={incrementValue}
        onReset={resetValue}></CounterButton>
      <CounterButton incrementation={2}
        onIncrement={incrementValue}
        onReset={resetValue}></CounterButton>
    </div>
  );
}

export default App;
