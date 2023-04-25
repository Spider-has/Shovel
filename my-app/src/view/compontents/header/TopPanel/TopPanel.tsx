import {Logo} from "../../icons/logo"
import {SearchBar} from "../../searchBar/searchBar"
import "./topPanel.css"

interface TopPanel{
}

const TopPanel = (props: TopPanel) => {
    return (
        <div className = {"top-panel"}>
            <div className = {"top-panel__logo-area"}>
                <Logo/>
            </div>
            <div className = {"top-panel__searchBar"}>
                <SearchBar/>
            </div>
        </div>
    )
}

export { TopPanel }