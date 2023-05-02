import "./recordGuide.css"
import "../../../../fonts/fonts.css"
import stage1Img from "../../../../images/pageImages/mainPage/recordGuideImg1.jpg"
import stage2Img from "../../../../images/pageImages/mainPage/recordGuideImg2.jpg"
import stage3Img from "../../../../images/pageImages/mainPage/recordGuideImg3.jpg"


const Header = () => {
    return(
        <div className = {"record-guide-header"}>
            <div className={"record-guide-header__header-wrapper"}>
                <div className={"record-guide-header__header-wrapper__start-text"}>
                    <h3 className={"record-guide-header__content usual-header-text"}>
                        Запись на раскопки за
                    </h3>
                </div>
                <div>
                    <span className={"record-nums-text"}>
                        3
                    </span>
                </div>
            </div>
            <div className={"record-guide-header__end-text"}>
                <h3 className={"record-guide-header__content usual-header-text"}>
                    простых шага
                </h3>
            </div>
        </div>
    )
}

const RecordGuideArea = () => {
    return(
        <section className={"map"}>
            <Header/>
        </section>
    )
}

export {RecordGuideArea}