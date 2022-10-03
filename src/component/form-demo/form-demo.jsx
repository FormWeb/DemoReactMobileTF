import { useState } from "react"

const FormDemo = () => {

    const [inputValue, setInputValue] = useState("")
    const [inputValue2, setInputValue2] = useState("")

    const handleClick = () => {
        console.log(inputValue)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setInputValue(e.target.value)
    }

    return <>
        <input value={inputValue} onChange={handleChange}></input>
        <input value={inputValue2} onChange={(e) => setInputValue2(e.target.value)}></input>
        <button onClick={handleClick}>Get input value</button>
    </>
}

export default FormDemo