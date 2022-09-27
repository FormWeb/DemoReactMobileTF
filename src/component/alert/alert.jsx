const Alert = () => {

    const handleClick = () => {
        alert("Je fais une alerte")
    }

    const handleChange = (event) => {
        console.log(event.target.value)
    }

    return (
        <>
            <input onChange={handleChange}></input>
            <button onClick={handleClick}>Alerte</button>
        </>
    )
}

export default Alert