import styles from "./button.module.css"
import "../../../fonts/fonts.css"

interface button {
    id: string,
    name: string,
    type: "reset" | "button" | undefined,
    content: string,
    mod: "focused" | "disabled" | undefined
}

const CustomButton = (props: button) => {
    return (
        <button
            className={`${styles.button}` }
            name={props.name}
            id={props.id}
            type={props.type}>
            <span className={"usual-button-text"}>
                {props.content}
            </span>
        </button>
    )
}

export { CustomButton }