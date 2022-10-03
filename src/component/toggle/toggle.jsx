import { useState } from "react"

const Toggle = (props) => {

    // Props

    // State
    const [message, setMessage] = useState("Bonjour")

    const handleClick = () => {
        if (message === "Bonjour") {
            setMessage("Au revoir")
            return
        }
        setMessage("Bonjour")
        // setMessage(valeurActuelleDuState => valeurActuelleDuState + " Bonjour")
    }

    return (
        <>
            <h3>{message}</h3>
            <button onClick={handleClick}>Toggle</button>
        </>
    )
}

export default Toggle