import "../../../fonts/fonts.css"
import {TopPanel} from './TopPanel/TopPanel';
import {MainTitle} from "./mainTitle/mainTitle";
import "./header.css"
import {MenuPanel} from "../menuPanel/menuPanel";

interface header{
}

const Header = (props: header) => {
    return (
        <header className={"header"}>
            <TopPanel/>
            <MainTitle/>
        </header>
    )
}

export { Header }