const PokemonListItem = (props) => {

    // Props
    const { name, id } = props

    return (
        <div>
            <h3>{name}</h3>
            <p>{id}</p>
        </div>
    )
}

export default PokemonListItem