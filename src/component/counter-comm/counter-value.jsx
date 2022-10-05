import { useEffect } from "react"

const CounterValue = (props) => {

    // Props
    const { value } = props

    useEffect(() => {
        console.log("counter pass")

        return () => {
            console.log("counter destroy")
        }
    })

    return (
        <>
            <h3>{value}</h3>
        </>
    )
}

export default CounterValue