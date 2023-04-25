import usualMaskotPos from "../../../images/skelet/skelet1.jpg"
import "./hints.css"
import "../../../fonts/fonts.css"
interface textCloud {
    content: string
}

interface mascot {

}


const MascotsHint = (props: mascot) => {
    return(
        <div>
            <img src ={usualMaskotPos}></img>
        </div>
    )
}


const MascotsHintCloud = (props: textCloud) => {
    return(
        <div className = {"text-cloud"}>
            <span className={"usual-content-text"}>
                {props.content}
            </span>
        </div>
    )
}



export {MascotsHint, MascotsHintCloud}