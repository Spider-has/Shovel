import "./timeLine.css"
import articleArrow from "../../../../images/pageImages/timeFeed/article_arrow.svg"
import {LinkedCustomButton} from "../../button/button";

interface lineTextBlockParams{
    heading: string,
    content: string,
}

const LineTextBlock = (props: lineTextBlockParams) => {
    const buttonText: string = "А что там было?";
    return(
        <article className = {"time-line-article"}>
            <div className={"time-line-article__arrow"}>
                <img className={""} src={articleArrow} alt = "Article arrow" />
            </div>
            <div className={"time-line-article__content"}>
                <div className={"time-line-article__text"}>
                    <div className={"time-line-article__heading"}>
                        <h2 className={"time-line-article-heading usual-header-text-l"}>
                            {props.heading}
                        </h2>
                    </div>
                    <div className={"time-line-article__article-text"}>
                        <span className={"usual-hint-text_extra-l"}>
                            {props.content}
                        </span>
                    </div>
                </div>
                <div className={""}>
                    <LinkedCustomButton id={"0"} name={""} type={"button"} content={buttonText} mod={undefined} contentClass={"usual-button-text"}/>
                </div>
            </div>
        </article>
    )
}


const TimeLine = () => {
    let pageContent: Array<lineTextBlockParams> = [
        {
            heading: "XIII-XV вв. н.э.",
            content: "Эпоха зарождения протогосударственности, появление протогорода “Аламнер”, больших поселений и культовых центров в Правобережье. Складывание торговых и политических союзов с Золотой Ордой и русскими княжествами",
        }
    ]
    return(
        <section className={"time-line-area"}>
            <LineTextBlock  heading={pageContent[0].content} content={pageContent[0].content}/>
        </section>
    )
}

export {TimeLine}