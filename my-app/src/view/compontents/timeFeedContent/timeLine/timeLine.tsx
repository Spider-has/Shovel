import "./timeLine.css"
import articleArrow from "../../../../images/pageImages/timeFeed/article_arrow.svg"
import {LinkedCustomButton} from "../../button/button";
import wheel from "../../../../images/pageImages/timeFeed/wheel.svg"
import coin from "../../../../images/pageImages/timeFeed/coin.svg"
import bracelet from "../../../../images/pageImages/timeFeed/bracelet.svg"
import lock from "../../../../images/pageImages/timeFeed/lock.svg"
import dish from "../../../../images/pageImages/timeFeed/dish.svg"
import axe from "../../../../images/pageImages/timeFeed/axe.svg"
import bagpipes from "../../../../images/pageImages/timeFeed/bagpipes.svg"
import psaltery from "../../../../images/pageImages/timeFeed/psaltery.svg"
import pot from "../../../../images/pageImages/timeFeed/pot.svg"

interface lineTextBlockParams{
    heading: string,
    content: string,
    reverse: boolean
}

const LineTextBlock = (props: lineTextBlockParams) => {
    let reverseClass = {
        heading: "",
        content: "",
        block: "",
        arrow: "",
        header: "",
        button: "",
    }
    if(props.reverse) {
        reverseClass.heading = "time-line-article-heading_reverse";
        reverseClass.content = "time-line-article__article-text_reverse";
        reverseClass.block = "time-line-article_reverse";
        reverseClass.arrow = "time-line-article__arrow_reverse";
        reverseClass.header = "time-line-article__heading_reverse";
        reverseClass.button = "time-line-article__button_reverse";
    }
    const buttonText: string = "А что там было?";
    return(
        <article className = {"time-line-article" + " " + reverseClass.block}>
            <div className={"time-line-article__content"}>
                <div className={"time-line-article__text"}>
                    <div className={"time-line-article__heading"  + " " + reverseClass.header}>
                        <div className={""}>
                            <img className={"time-line-article__arrow"  + " " + reverseClass.arrow} src={articleArrow} alt = "Article arrow" />
                        </div>
                        <h2 className={"time-line-article-heading usual-header-text-l"  + " " + reverseClass.heading}>
                            {props.heading}
                        </h2>
                    </div>
                    <div className={"time-line-article__article-text"  + " " + reverseClass.content}>
                        <span className={"line-article-text usual-hint-text_extra-l"}>
                            {props.content}
                        </span>
                    </div>
                </div>
                <div className={"time-line-article__button" + " " + reverseClass.button}>
                    <LinkedCustomButton id={"0"} name={""} type={"button"} content={buttonText} mod={"full-light"} contentClass={"usual-button-text"}/>
                </div>
            </div>
        </article>
    )
}

const FirstLayerImg = () => {
    return(
        <div className={"time-line_layer-images"}>
            <div className={"coin-area"}>
                <img src = {coin} alt = "coin"/>
            </div >
            <div className={"bracelet-area"}>
                <img src = {bracelet} alt = "bracelet"/>
            </div>
            <div className={"wheel-area"}>
                <img src = {wheel} alt = "wheel"/>
            </div>
        </div>
    )
}

const SecondLayerImg = () => {
    return(
        <div className={"time-line_layer-images"}>
            <div className={"axe-area"}>
                <img src = {axe} alt = "coin"/>
            </div >
            <div className={"dish-area"}>
                <img src = {dish} alt = "bracelet"/>
            </div>
            <div className={"lock-area"}>
                <img src = {lock} alt = "wheel"/>
            </div>
        </div>
    )
}

const ThirdLayerImg = () => {
    return(
        <div className={"time-line_layer-images"}>
            <div className={"bagpipes-area"}>
                <img src = {bagpipes} alt = "coin"/>
            </div >
            <div className={"psaltery-area"}>
                <img src = {psaltery} alt = "bracelet"/>
            </div>
        </div>
    )
}

const FourthLayerImg = () => {
    return(
        <div className={"time-line_layer-images"}>
            <div className={"pot-area"}>
                <img src = {pot} alt = "coin"/>
            </div >
        </div>
    )
}


const TimeLine = () => {
    let pageContent: Array<lineTextBlockParams> = [
        {
            heading: "XIII-XV вв. н.э.",
            content: "Эпоха зарождения протогосударственности, появление протогорода “Аламнер”, больших поселений и культовых центров в Правобережье. Складывание торговых и политических союзов с Золотой Ордой и русскими княжествами",
            reverse: false
        },
        {
            heading: "IX-XII вв. н.э.",
            content: "Эпоха формирования древнемарийского этноса и культуры, самоопределения и полного расселения по марийской земле",
            reverse: true
        },
        {
            heading: "V-VIII вв. н.э.",
            content: "Эпоха, когда Финны Поволжья еще только расселяются на этих территориях, только зарождаются местные обычаи и видны предпосылки к формированию этноса",
            reverse: false
        },
        {
            heading: "7 тыс. лет до н.э.",
            content: "Появляются оригинальные предметы быта, что позволяет выделить особую культуру уже в то время. Она зародилась еще в эпоху неолита и завершилась с приходом других людей и навыками скотоводства и металлургии",
            reverse: true
        }
    ]
    return(
        <section className={"time-line-area"}>
            <FirstLayerImg/>
            <div className={"time-line__line"}>
            </div>
            <div className={"time-line-article-1"}>
                <LineTextBlock  heading={pageContent[0].heading} content={pageContent[0].content} reverse={pageContent[0].reverse}/>
            </div>
            <div className={"time-line-article-2"}>
                <LineTextBlock  heading={pageContent[1].heading} content={pageContent[1].content} reverse={pageContent[1].reverse}/>
            </div>
            <SecondLayerImg/>
            <ThirdLayerImg/>
            <div className={"time-line-article-3"}>
                <LineTextBlock  heading={pageContent[2].heading} content={pageContent[2].content} reverse={pageContent[2].reverse}/>
            </div>
            <div className={"time-line-article-4"}>
                <LineTextBlock  heading={pageContent[3].heading} content={pageContent[3].content} reverse={pageContent[3].reverse}/>
            </div>
            <FourthLayerImg/>
     </section>
    )
}


export {TimeLine}