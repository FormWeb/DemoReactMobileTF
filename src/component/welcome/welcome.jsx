import PropTypes from "prop-types"
import style from "./welcome.module.css"

const Welcome = (props) => {

    // Props

    // const name = props.name
    const { name, lastName, personne, red } = props

    // const styleOfMessage = red ? style.red : ""

    return (
        <>
            {/* <p className={styleOfMessage}>Bonjour {name} {lastName}</p> */}
            
            {red ? (
                <p className={style.red}>Bonjour {name} {lastName}</p>
            ) : (
                <p>Bonjour {name} {lastName}</p>
            )}


            {/* <h2>{personne.name} {personne.lastName}</h2> */}
        </>
    )
}

Welcome.defaultProps = {
    lastName: "NO NAME",
    red: false
}

Welcome.propTypes = {
    name : PropTypes.string,
    lastName : PropTypes.string
}

export default Welcome