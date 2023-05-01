import {CustomButton} from "../../button/button";
import "./newsBlock.css"
import {ReactNode} from "react";
import news_img1 from "../../../../images/news/news_img1.jpg"
import news_img2 from "../../../../images/news/news_img2.jpg"
import news_img3 from "../../../../images/news/news_img3.jpg"

interface NewCard {
    id: string,
    heading: string,
    img: string,
    description: string,
}


const NewsCard = (props: NewCard) => {
    return(
        <div className={"new-card"}>
            <div className={"new-card__area_type_dark"}>
            </div>
            <div className={"new-card__header"}>
                <h4 className={""}>
                    {props.heading}
                </h4>
            </div>
            <div className={"new-card__image-place"}>
                <img  className={"new-card__image-place"} src = {props.img}/>
            </div>
            <div className={"card-content"}>
                <div className={"card-content__description"}>
                    <span>
                        {props.description}
                    </span>
                </div>
                <div className={"card-content__link-button"}>
                    <CustomButton id={""} name={""} type={"button"} content={""} mod={undefined}/>
                </div>
            </div>
        </div>
    )
}

const NewsCollection = () => {
    let CardsCollection: Array<NewCard> = [
        {
            id: "0",
            heading: "ААААААААААААААААААААА",
            img: news_img1,
            description: "ББББББББББББББББББББББББББББББББ",
        },
        {
            id: "1",
            heading: "Могильник X века",
            img: news_img1,
            description: "В Чувашии обнаружили уникальный могильник 10 века",
        },
        {
            id: "2",
            heading: "Кошелек из X века",
            img: news_img2,
            description: "В Чувашии обнаружили уникальный могильник 10 века",
        },
        {
            id: "3",
            heading: "Раскопки могильника в Моркинском р-не",
            img: news_img3,
            description: "В Чувашии обнаружили уникальный могильник 10 века",
        },
        {
            id: "4",
            heading: "Какой-то текст",
            img: news_img1,
            description: "Здесь очень интересный и нестандартный текст",
        }
    ];
    let Cards: Array<ReactNode> = CardsCollection.map(({id, heading, img, description}) => {
        return(
            <NewsCard id={id} heading={heading} img={img} description={description}/>
        )
    });
    return(
        <div className = {"news-collection"}>
            {Cards}
        </div>
    )
}

const NewsArea = () => {
    return(
        <section className={"last-news"}>
            <div className={"news__header"}>
                <h3>
                    Последние события
                </h3>
            </div>
            <div className = {"news__wrapper"}>
                <NewsCollection/>
            </div>
        </section>
    )
}

export {NewsArea}