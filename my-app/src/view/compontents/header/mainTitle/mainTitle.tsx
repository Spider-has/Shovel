import mainTitleImg from "../../../../images/pageImages/mainPage/Mask-group_1.gif"
import "./mainTitle.css"

interface mainTitle{
}

const MainTitle = (props: mainTitle) => {
    return (
        <div className = "main-title">
            <img className= "main-title__img" src = {mainTitleImg} alt= "main title"/>
            <div className={"main-title__text"}>
                <span className = {"main-heading-video-text"}>
                    это интересно
                </span>
            </div>
        </div>
    )
}

export { MainTitle }