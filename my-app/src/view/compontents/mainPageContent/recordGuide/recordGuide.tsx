import "./recordGuide.css"
import "../../../../fonts/fonts.css"
import stage1Img from "../../../../images/pageImages/mainPage/recordGuideImg1.png"
import stage2Img from "../../../../images/pageImages/mainPage/recordGuideImg2.png"
import stage3Img from "../../../../images/pageImages/mainPage/recordGuideImg3.png"
import {ReactNode} from "react";
import {MascotsHint, MascotsHintCloud} from "../../mascotHints/hints";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;


const RegistrationForm = () => {
    let cloudMessage: string = "Вы можете оставить свою почту , чтобы, когда появится новая экспедциия, с вами могли связаться."
    return(
        <article className={"form-area"}>
            <div className={"form-area__form-area-heading"}>
                <h3 className={"form-area-heading usual-header-text-sm"}>
                    А если нет доступных экспедиций?
                </h3>
            </div>
            <div className={"form-wrapper"}>
                <div className={"form-wrapper__hint-area"}>
                    <div className={"form-hint-area__skeleton"}>
                        <MascotsHint/>
                    </div>
                    <div className={"form-hint-area__text-cloud"}>
                        <MascotsHintCloud content={cloudMessage} cloudType={"text-cloud text-cloud_type_form"} size={"small"} textSize={"usual-hint-text_m"} cloudColor={"white"}/>
                    </div>
                </div>
                <form className={"form"} action={""} method={""}>
                    <div className={"form__input-field-wrapper"}>
                        <input type = "text" className={"form__input"} placeholder={"Введите ваше имя"} required/>
                        <input type = "email" className={"form__input"} placeholder={"Введите электронную почту"} required/>
                    </div>
                    <input type = "submit" className={"form__submit-button"} placeholder={"Подпишитесь"}/>
                </form>
            </div>
        </article>
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
        <section className={"record-and-guide"}>
            <div className={"guides-area"}>
                <Header/>
                <RecordGuides guides={guide.guides}/>
                <div className={"guides-mascot"}>
                    <MascotsHint reverse={true}/>
                </div>
                <RegistrationForm/>
            </div>
        </section>
    )
}

export {RecordGuideArea}