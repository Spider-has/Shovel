import arrowLeft from "../../../images/arrow_left.svg"
import arrowRight from "../../../images/arrow_right.svg"
import "./arrows.css"

interface arrow{
}

const ArrowRight = (props: arrow) => {
    return (
        <img className="" src={arrowRight} alt = "arrow right" />
    )
}

const ArrowLeft = (props: arrow) => {
    return (
        <img className="" src={arrowLeft} alt = "arrow left" />
    )
}

export { ArrowRight, ArrowLeft }