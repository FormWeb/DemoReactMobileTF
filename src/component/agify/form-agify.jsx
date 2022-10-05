import { useState } from "react"

const FormAgify = (props) => {

    // Props
    const { onSearch } = props

    const [name, setName] = useState("")

    const handleSearch = () => {
        onSearch(name)
    }

    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={handleSearch}>Search</button>
        </>
    )
}

export default FormAgify