import "./button.css"
import "../../../fonts/fonts.css"

interface button {
    id: string,
    name: string,
    type: "reset" | "button" | undefined,
    content: string,
    mod: "focused" | "disabled" | "light" | "full-light" | undefined,
    contentClass: string;
}

const CustomButton = (props: button) => {
    let buttonMod: string = "";
    switch(props.mod){
        case "light":
            buttonMod = "button_full_light"
            break;
        case "focused":
            buttonMod = "button_focused"
            break;
        case "disabled":
            buttonMod = "button_disabled"
            break;
        case "full-light":
            buttonMod = "button_disabled"
            break;
    }
    return (
        <button
            className={"button" + " " + buttonMod}
            name={props.name}
            id={props.id}
            type={props.type}>
            <span className={props.contentClass}>
                {props.content}
            </span>
        </button>
    )
}

const LinkedCustomButton = (props: button) => {
    let buttonMod: string = "";
    switch(props.mod){
        case "light":
            buttonMod = "button_light"
            break;
        case "focused":
            buttonMod = "button_focused"
            break;
        case "disabled":
            buttonMod = "button_disabled"
            break;
        case "full-light":
            buttonMod = "button_full_light"
            break;
    }
    return (
        <a
                className={"button" + " " + buttonMod}
                id={props.id}>
                <span className={props.contentClass}>
                    {props.content}
                </span>
        </a>
    )
}

export { CustomButton, LinkedCustomButton }