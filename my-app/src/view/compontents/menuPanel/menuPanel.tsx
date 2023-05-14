import "./menuPanel.css"
import {ReactNode} from "react";
import "../../../fonts/fonts.css"
import { Link } from 'react-router-dom'

interface menuPanel{
    menuList: Array<string>;
    listItems: Array<HTMLElement>;
}

let menuPanelSuper: menuPanel = {
    menuList: ["Новости", "Люди", "Временная лента", "Карта", "Музеи", "Архив"],
    listItems: []
}

const MenuPanel = () => {
    let menu: Array<ReactNode> = [];
    menuPanelSuper.menuList.forEach((item) => {
        menu.push(
            <div className={"menu-panel__menu-list-element"}>
                <a href = "" className={"usual-menu-text"}>
                    {item}
                </a>
            </div>
        )
    });
    menu[0] =  <div className={"menu-panel__menu-list-element"}>
        <a href = "#news-section" className={"usual-menu-text"}>
            Новости
        </a>
    </div>
    menu[2] =  <div className={"menu-panel__menu-list-element"}>
        <Link to='/time_feed'>
        <a className={"usual-menu-text"}>
            {menuPanelSuper.menuList[2]}
        </a>
        </Link>
    </div>
    return (
        <div className={"menu-panel"}>
            {menu}
        </div>
    )
}

export { MenuPanel }