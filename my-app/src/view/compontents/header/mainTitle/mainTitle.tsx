import mainTitleImg from "../../../../images/main_title.svg"
import "./mainTitle.css"

interface mainTitle{
}

const MainTitle = (props: mainTitle) => {
    return (
        <div className = "main-title">
            <img className= "main-title__img" src = {mainTitleImg} alt= "main title"/>
        </div>
    )
}

export { MainTitle }