import Image from "../../../images/main_logo.svg"
import "./logo.css"

interface logo{
}

const Logo = (props: logo) => {
    return (
        <img className="logo logo_size_l" src={Image} alt = "logo" />
    )
}

export { Logo }