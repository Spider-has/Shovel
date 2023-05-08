import usualMascotPos from "../../../images/skelet/skelet1.svg"
import "./hints.css"
import "../../../fonts/fonts.css"
interface textCloud {
    content: string,
    cloudType: string,
}

interface mascot {
    reverse?: boolean,
}


const MascotsHint = (props: mascot) => {
    let reverseCheck: string = "";
    if (props.reverse){
        reverseCheck = "mascot-hint_reverse";
    }
    return(
        <div className={"mascot-hint" }>
            <img className={"mascot-hint " + reverseCheck} src = {usualMascotPos} alt = "mascot"></img>
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