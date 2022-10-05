import axios from "axios"
import { useEffect, useState } from "react"

const Agify = (props) => {

    // Props
    const { name } = props

    // State
    const [firstName, setFirstName] = useState("")
    const [age, setAge] = useState("") 

    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    // const fetchData = async () => {
    //     const response = await axios.get("https://api.agify.io?name=" + name)
    //     const data = response.data
    //     return data
    // }

    useEffect(() => {
        setLoading(true)
        axios.get("https://api.agify.io?name=" + name)
            .then(
                ({ data }) => {
                    console.log(data)
                    setFirstName(data.name)
                    setAge(data.age)
                    setError(false)
                }
            )
            .catch((err) => {
                setError(true)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [name])

    return (
        <>
            {error ? (
                <h3>Erreur</h3>
            ) : loading ? (
                <h3>Loading</h3>
            ) : (
                <h3>{firstName} : {age} ans</h3>
            )}
        </>
    )
}

export default Agify