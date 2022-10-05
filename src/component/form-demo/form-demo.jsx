import { useState, useEffect } from "react"

const FormDemo = () => {

    const [inputValue, setInputValue] = useState("")
    const [inputValue2, setInputValue2] = useState("")

    const handleClick = () => {
        console.log(inputValue)
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    useEffect(() => {
        setInputValue("bonjour")
    }, [])

    return <>
        <input value={inputValue} onChange={handleChange}></input>
        <input value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}></input>
        <button onClick={handleClick}>Get input value</button>
    </>
}

export default FormDemo