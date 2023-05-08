import "./recordGuide.css"
import "../../../../fonts/fonts.css"
import stage1Img from "../../../../images/pageImages/mainPage/recordGuideImg1.png"
import stage2Img from "../../../../images/pageImages/mainPage/recordGuideImg2.png"
import stage3Img from "../../../../images/pageImages/mainPage/recordGuideImg3.png"
import {ReactNode} from "react";
import {MascotsHint} from "../../mascotHints/hints";


const RegistrationForm = () => {
    return(
        <div>

        </div>
    )
}

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

interface guidesStage{
    index: number,
    header: string,
    content: string,
    image: string,
}
interface stages{
    guides: Array<guidesStage>
}


const RecordGuides = (props: stages) => {
    let guideStages: Array<ReactNode>;
    guideStages = props.guides.map(({index, header, content, image}) => {
        return(
            <article className={"guide"}>
                <div className={"guide__guide-text-wrapper"}>
                    <div className={"guide-header-index"}>
                        <span className = {"record-nums-text"}>
                            {index}
                        </span>
                    </div>
                    <div className ={"guide-content-area"}>
                    <div>
                        <h3 className={"guide-heading usual-header-text-sm"}>
                            {header}
                        </h3>
                    </div>
                    <div>
                        <span className={"usual-content-text"}>
                            {content}
                        </span>
                    </div>
                    </div>
                </div>
                <div className = {"guide__image"}>
                    <img src = {image} alt={"guide-stage " + index}/>
                </div>
            </article>
        )
    })
    return(
        <div className={"guides-box"}>
            {guideStages}
        </div>
    )
}

const RecordGuideArea = () => {
    let guide: stages = {
       guides: [{
           index: 1,
           header: "Создайте аккаунт",
           content: "Чтобы участвовать в экспедиции достаточно зарегистрироваться на площадке добро.ру",
           image: stage1Img,
       },
       {
           index: 2,
           header: "Оформите свой профиль",
           content: "Возраст, увлечения, контактную информацию и другое. Это поможет нам узнать вас перед приглашением в экспедицию",
           image: stage2Img,
       },
       {
           index: 3,
           header: "Отправляйте заявку",
           content: "Посмотрите дату экспедиции, узнайте свои обязанности и оставляйте заявку, мы посмотрим ваш профиль и свяжемся с вами",
           image: stage3Img,
       },
       ]
    };
    return(
        <section className={"guides-area"}>
            <Header/>
            <RecordGuides guides={guide.guides}/>
            <div className={"guides-mascot"}>
                <MascotsHint reverse={true}/>
            </div>

        </section>
    )
}

export {RecordGuideArea}