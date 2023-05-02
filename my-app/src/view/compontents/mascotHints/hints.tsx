import usualMaskotPos from "../../../images/skelet/skelet1.png"
import "./hints.css"
import "../../../fonts/fonts.css"
interface textCloud {
    content: string,
    cloudType: string,
}

interface mascot {

}


const MascotsHint = (props: mascot) => {
    return(
        <div>
            <img src = {usualMaskotPos}></img>
        </div>
    )
}


const MascotsHintCloud = (props: textCloud) => {
    return(
        <div className = {props.cloudType}>
            <span className={"usual-content-text"}>
                {props.content}
            </span>
        </div>
    )
}



export {MascotsHint, MascotsHintCloud}