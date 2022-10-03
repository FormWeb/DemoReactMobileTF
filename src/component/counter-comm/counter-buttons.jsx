const CounterButton = (props) => {

    // Props
    const { incrementation } = props
    const { onIncrement, onReset } = props

    const handleIncrement = () => {
        onIncrement(incrementation)
    }

    return (
        <>
            <button onClick={handleIncrement}>+ {incrementation}</button>
            <button onClick={() => onReset()}>Reset</button>
        </>
    )
}

export default CounterButton