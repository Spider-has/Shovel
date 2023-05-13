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

const TopPanel = () => {
    return(
        <div className={"time-feed-top-panel"}>
            <div className={"time-feed-panel__logo"}>
                <img className={"time-feed-panel__img"} src = {blueLogo} alt = "Logo"/>
            </div>
            <div className={"time-feed-panel__burger-menu-area"}>
                <img src = {burgerLogo} alt = "burger menu"/>
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
        <div className = {"grass-area"}>
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