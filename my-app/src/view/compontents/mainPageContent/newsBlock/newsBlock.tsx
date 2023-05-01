import {CustomButton} from "../../button/button";
import "./newsBlock.css"
import {ReactNode} from "react";
import news_img1 from "../../../../images/news/news_img1.jpg"
import news_img2 from "../../../../images/news/news_img2.jpg"
import news_img3 from "../../../../images/news/news_img3.jpg"
import {ArrowLeft, ArrowRight} from "../../icons/arrows";

interface NewCard {
    id: string,
    heading: string,
    img: string,
    description: string,
    status: "active" | "non-active"
}

const ArrowLeftArea = () => {
    return(
        <div className={""}>
            <ArrowLeft/>
        </div>
    )
}

const ArrowRightArea = () => {
    return(
        <div className={""}>
            <ArrowRight/>
        </div>
    )
}



const NewsCard = (props: NewCard) => {
    let darkType: string = "";
    if(props.status == "non-active"){
        darkType = "new-card__area_type_dark";
    }
    return(
        <div className={"new-card"}>
            <div className={darkType}>
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
            status: "non-active",
        },
        {
            id: "1",
            heading: "Могильник X века",
            img: news_img1,
            description: "В Чувашии обнаружили уникальный могильник 10 века",
            status: "active",
        },
        {
            id: "2",
            heading: "Кошелек из X века",
            img: news_img2,
            description: "В Чувашии обнаружили уникальный могильник 10 века",
            status: "active",
        },
        {
            id: "3",
            heading: "Раскопки могильника в Моркинском р-не",
            img: news_img3,
            description: "В Чувашии обнаружили уникальный могильник 10 века",
            status: "active",
        },
        {
            id: "4",
            heading: "Какой-то текст",
            img: news_img1,
            description: "Здесь очень интересный и нестандартный текст",
            status: "non-active",
        }
    ];
    let Cards: Array<ReactNode> = CardsCollection.map(({id, heading, img, description, status}) => {
        return(
            <NewsCard id={id} heading={heading} img={img} description={description} status={status}/>
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
            <div className = {"arrow-left"}>
                <ArrowLeft/>
            </div>
            <div className = {"arrow-right"}>
                <ArrowRight/>
            </div>
        </section>
    )
}

export {NewsArea}