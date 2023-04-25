import "./menuPanel.css"
import {ReactNode} from "react";
import "../../../fonts/fonts.css"

interface menuPanel{
    menuList: Array<string>;
    listItems: Array<HTMLElement>;
}

let menuPanelSuper: menuPanel = {
    menuList: ["Новости", "Люди", "Памятники", "Карта", "Музеи", "Архив"],
    listItems: []
}

const MenuPanel = () => {
    let menu: Array<ReactNode> = [];
    menuPanelSuper.menuList.forEach((item) => {
        menu.push(
            <div className={"menu-panel__menu-list-element"}>
                <a href = "./" className={"usual-content-text_m"}>{item}</a>
            </div>
        )
    })
    return (
        <div className={"menu-panel"}>
            {/*{ menuPanel = menuPanel.*/}
            {menu}
            {/*}*/}
        </div>
    )
}

export { MenuPanel }