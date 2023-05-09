import arrowLeft from "../../../images/arrow_left.svg"
import arrowRight from "../../../images/arrow_right.svg"
import photoArrowLeft from "../../../images/photo_arrow_left.svg"
import photoArrowRight from "../../../images/photo_arrow_right.svg"
import "./arrows.css"

interface arrow{
}

const PhotoArrowRight = (props: arrow) => {
    return (
        <img className="" src={photoArrowRight} alt = "arrow right" />
    )
}

const PhotoArrowLeft = (props: arrow) => {
    return (
        <img className="" src={photoArrowLeft} alt = "arrow right" />
    )
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

export { ArrowRight, ArrowLeft, PhotoArrowRight, PhotoArrowLeft }