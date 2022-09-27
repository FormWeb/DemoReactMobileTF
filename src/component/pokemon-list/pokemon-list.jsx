import PokemonListItem from "./pokemon-list-item"

const PokemonList = (props) => {

    // Props
    const { pokemons } = props

    const pokemonsJSX = pokemons.map(
        poke => <PokemonListItem key={poke.id} name={poke.name} id={poke.id}/>
        // poke => <PokemonListItem key={poke.id} {...poke}/>
    )

    return (
        <>
            {pokemonsJSX}
        </>
    )
}

export default PokemonList