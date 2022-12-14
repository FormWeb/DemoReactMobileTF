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
    //     const response = await axios.get("https://api.agify.io?name=" + "william")
    //     const response2 = await axios.get("https://api.agify.io?name=" + "michael")
    //     const data = response.data
    //     const data2 = response2.data
    //     return [data.age, data2.age]
    // }

    useEffect(() => {

        // Exemple function async

        // fetchData()
        //     .then(
        //         response => console.log(response)
        //     )
        
        setLoading(true)
        setError(false)
        axios.get("https://api.agify.io?name=" + name)
            .then(
                ({ data }) => {
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

        // Equivalent avec fetch

        // fetch("https://api.agify.io?name=" + name)
        //     .then(res => res.json())
        //     .then(
        //         data => {
        //             console.log(data)
        //         }
        //     )

        // console.log("pass")
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