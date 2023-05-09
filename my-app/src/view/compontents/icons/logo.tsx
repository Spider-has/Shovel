import Image from "../../../images/main_logo.svg"
import "./logo.css"

interface logo{
    size: string;
}

const Logo = (props: logo) => {
    return (
        <img className={"logo" + " " + props.size} src={Image} alt = "logo" />
    )
}

export { Logo }