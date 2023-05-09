import usualMascotPos from "../../../images/skelet/skelet1.svg"
import "./hints.css"
import "../../../fonts/fonts.css"
interface textCloud {
    content: string,
    cloudType: string,
    size: "extra-small" |"small" | "standard",
    textSize: string,
    cloudColor: "white" | "black",
    textMod?: "central"
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
    let cloudParams: string = "";
    let cloudTextParams: string = "";
    if (props.textMod === "central"){
        cloudTextParams = "text-cloud__central-text";
    }
    if(props.size === "extra-small")
    {
        if(props.cloudColor === "black")
        {
            cloudParams = "text-cloud_size_sm";
        }
        else{
            cloudParams = "text-cloud_white_size_extra_sm";
        }
    }
    else if(props.size === "small")
    {
        if(props.cloudColor === "black")
        {
            cloudParams = "text-cloud_size_sm";
        }
        else{
            cloudParams = "text-cloud_white_size_sm";
        }
    }
    else
    {
        if(props.cloudColor === "black")
        {
            cloudParams = "text-cloud_size_m";
        }
        else{
            cloudParams = "text-cloud_white_size_sm";
        }
    }
    return(
        <div className = {props.cloudType + " " + cloudParams}>
            <span className={props.textSize + " " + cloudTextParams}>
                {props.content}
            </span>
        </div>
    )
}



export {MascotsHint, MascotsHintCloud}