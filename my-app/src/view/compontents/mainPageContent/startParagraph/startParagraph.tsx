import {MascotsHintCloud, MascotsHint} from "../../mascotHints/hints";
import {CustomButton} from "../../button/button";
import "./startParagraph.css"
import ArticleImg1 from "../../../../images/pageImages/mainPage/arh_article_img_1.jpg"
import ArticleImg2 from "../../../../images/pageImages/mainPage/arh_article_img_2.jpg"
import {ReactNode} from "react";
import "../../../../fonts/fonts.css"
interface article{
    imgPos: "right" | "left";
    img: string;
    heading: string;
    content: string[];
}

const MascotHintArea = () => {
    let paragraphContent: string = "Всем привет, мы - Лопата! \n" +
        "Лопата - это сообщество людей, которым безумно нравится археология и раскопки. Мы хотим, чтобы люди узнали, насколько это улекательно и присоединились к нам!"
    return(
        <div className={"start-paragraph-hint-area"}>
            <div className={"start-paragraph-hint-area__mascot-area"}>
                <MascotsHint/>
            </div>
            <div className={"start-paragraph-hint-area__text-cloud-area"}>
                <MascotsHintCloud content={paragraphContent}/>
            </div>
            <div className={"start-paragraph-hint-area__button-area"}>
                <CustomButton id={"signUpButton"} name={"signUp"} type={"button"} content={"Записаться на раскопки"} mod={undefined}/>
            </div>
        </div>
    )
}

const ParagraphArticle = (props: article) => {
    let articleClass: string = "";
    if(props.imgPos === "right"){
        articleClass = "article_type_reverse";
    }
    else if(props.imgPos === "left") {
        articleClass = "article_type_not-reverse";
    }
    let paragraphs: Array<ReactNode> = [];
    props.content.forEach((paragraph) => {
        paragraphs.push(
            <p className={"article-content__paragraph usual-content-text"}>
                {paragraph}
            </p>
        )
    })
    return(
        <div className={`article ${articleClass}`}>
            <div className={"article__img"}>
                <img className={"img"} src = {props.img}/>
            </div>
            <div className={"article-content"}>
                <h3 className={"article-content__heading usual-article-heading"}>
                    {props.heading}
                </h3>
                {paragraphs}
            </div>
        </div>
    )
}

const ContentArea = () => {
    let articles: Array<ReactNode> = [];
    articles[0] = <ParagraphArticle imgPos={"left"} content={["Археология - это наука, которая изучает прошлое человечества через материальные следы, оставленные на земле. И экспедиция - один из способов изучения нашего прошлого."]}
                                    heading={"Что такое археология?"} img={ArticleImg1}/>
    articles[1] = <ParagraphArticle imgPos={"right"} content={["Экспедиция начинается с тщательной подготовки места раскопки. Мы прибываем на место и оперативно устанавливаем лагерь.", "Команда делится на две группы: одни начинают аккуратно выкапывать землю в поисках новых артефактов, другие очищают и изучают уже найденные артефакты. \n" +
                                    "В свободное время мы отдыхаем и общаемся.", "Под конец экспедиции проводится особое торжество - посвящение новичков в археологи. После этого мы собираем вещи и возвращаемся домой."]}
                                    heading={"Как проходят экспедиции?"} img={ArticleImg2}/>
    return(
        <div className={"content-area"}>
            {articles}
        </div>
    )
}

const FirstParagraphArea = () => {
    return(
        <section className={"start-paragraph"}>
            <MascotHintArea/>
            <ContentArea/>
        </section>
    )
}

export {FirstParagraphArea}