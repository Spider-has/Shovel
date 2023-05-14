import "./header.css"
import blueLogo from "../../../../images/heading_blue.svg"
import burgerLogo from "../../../../images/pageImages/timeFeed/burger__menu.svg"
import cloudsGroup from "../../../../images/pageImages/timeFeed/clouds_group.svg"
import cloud from "../../../../images/pageImages/timeFeed/cloud.svg"
import rightTree from "../../../../images/pageImages/timeFeed/right_tree.svg"
import leftTree from "../../../../images/pageImages/timeFeed/left_tree.svg"
import sittingSkeleton from "../../../../images/pageImages/timeFeed/sitting_skelet.svg"
import {MascotsHintCloud} from "../../mascotHints/hints";
import grass from "../../../../images/pageImages/timeFeed/grass.svg"
import {ReactNode} from "react";
import { Link } from 'react-router-dom'

const burgerOn = (burgerId: string, burgerContentId: string, backgroundId: string) => {
    let burger = document.getElementById(burgerId);
    let burgerContent = document.getElementById(burgerContentId);
    let background = document.getElementById(backgroundId);
    let panel1: HTMLElement | null = document.getElementById("panel1");
    let panel2: HTMLElement | null = document.getElementById("panel2");
    let panel3: HTMLElement | null = document.getElementById("panel3");
    if (burger && burgerContent && background && panel1 && panel2 && panel3){
        burger.classList.add("animated");
        burgerContent.classList.add("animated");
        background.classList.add("animated");
        panel1.classList.add("animated");
        panel2.classList.add("animated");
        panel3.classList.add("animated");
    }
}

const burgerOff = (burgerId: string, burgerContentId: string, backgroundId: string) => {
    let burger: HTMLElement | null = document.getElementById(burgerId);
    let burgerContent: HTMLElement | null = document.getElementById(burgerContentId);
    let background: HTMLElement | null = document.getElementById(backgroundId);
    let panel1: HTMLElement | null = document.getElementById("panel1");
    let panel2: HTMLElement | null = document.getElementById("panel2");
    let panel3: HTMLElement | null = document.getElementById("panel3");
    if (burgerContent && background && panel1 && panel2 && panel3){
        burgerContent.classList.remove("animated");
        background.classList.remove("animated");
        panel1.classList.remove("animated");
        panel2.classList.remove("animated");
        panel3.classList.remove("animated");

    }
}

const BurgerContent = () => {
    let burgerId = "burger-menu";
    let burgerContentId = "burger-menu-content";
    let burgerBackground = "burger-menu-background";
    let links: Array<string> = [
        "Главная", "Новости", "Люди", "Временная лента", "Карта", "Музеи", "Архив", "Раскопки"
    ];
    let hide:boolean = true;
    let linksObj: Array<ReactNode> = links.map((link: string) => {
        return(
            <div  className={"burger-menu-text"} >
                <span className={"burger-menu-text__text usual-burger-menu-text"}> {link} </span>
            </div>
        )
    });
    linksObj[0] = <div  className={"burger-menu-text"} >
                    <Link className={"burger-Link"} to='/'>
                        <span className={"burger-menu-text__text usual-burger-menu-text"}> Главная </span>
                    </Link>
                </div>
    return(
        <div className={"burger-menu"}>
            <div id ={burgerId} className={"burger-menu__button"} onClick={
                () => {
                    if(hide) {
                        burgerOn(burgerId, burgerContentId, burgerBackground);
                        hide = false;
                    }
                    else {
                        burgerOff(burgerId, burgerContentId, burgerBackground);
                        hide = true;
                    }
                }
            }>
                <div id ="panel1" className={"burger-menu-line line1"}>

                </div>
                <div id ="panel2" className={"burger-menu-line line2"}>

                </div>
                <div id ="panel3" className={"burger-menu-line line3"}>

                </div>
            </div>
            <div id = "burger-menu-content" className={"burger-menu__content"}>
                <div className={"burger-menu__main-links"}>
                    {linksObj}
                </div>
                <a className={"burger-Link"} href = "#footer"> <div  className={"burger-menu-text"}>
                    <span className={"usual-burger-menu-text"}> Помощь</span>
                </div>
                </a>
            </div>
            <div id ="burger-menu-background" className={"burger-menu-background"}>
            </div>
        </div>
    )
}

const TopPanel = () => {
    return(
        <div className={"time-feed-top-panel"}>
            <div className={"time-feed-panel__logo"}>
                <Link to = "/">
                <img className={"time-feed-panel__img"} src = {blueLogo} alt = "Logo"/>
                </Link>
            </div>
            <div className={"grid-burger-area"}>
                <BurgerContent/>
            </div>
        </div>
    )
}

const Clouds = () => {
    return(
        <div className={"clouds-group"}>
            <img className={"clouds-group__img"} src = {cloudsGroup} alt = "clouds"/>
        </div>
    )
}

const Cloud = () => {
    return(
        <div className={"cloud"}>
            <img className={"cloud__img"} src = {cloud} alt = "clouds"/>
        </div>
    )
}

const RightTree = () => {
    return(
        <div className={"right-tree"}>
            <img className={"right-tree__img"} src = {rightTree} alt = "clouds"/>
        </div>
    )
}

const LeftTree = () => {
    return(
        <div className={"left-tree"}>
            <img className={"left-tree__img"} src = {leftTree} alt = "clouds"/>
        </div>
    )
}

const SkeletonArea = () => {
    let message: string = "Привет! Это - временная линия, показывающая слои марийской культуры. Листай вниз и погружайся в прошлое, узнавай все про эпохи марийцев и памятники культуры тех времен";
    return(
        <div className={"sitting-skeleton"}>
            <div className={"skeleton-area"}>
                <img className={"skeleton"} src = {sittingSkeleton} alt = "skeleton sitting"/>
            </div>
            <div className={"cloud-area"}>
                <MascotsHintCloud content={message} cloudType={"text-cloud text-cloud_type_time-feed"} cloudColor={"black"} size={"small"} textSize={"usual-hint-text_m"}/>
            </div>
        </div>
    )
}

const GrassArea = () => {
    return(
        <div className={"header-bottom"}>
            <div className = {"grass-area"}>
            </div>
        </div>
    )
}

const TimeFeedHeader = () => {
    return(
        <header className={"time-feed-header"}>
            <Clouds/>
            <Cloud/>
            <TopPanel/>
            <LeftTree/>
            <RightTree/>
            <SkeletonArea/>
            <GrassArea/>
        </header>
    )
}

export {TimeFeedHeader}