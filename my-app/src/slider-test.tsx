import {CustomButton, LinkedCustomButton} from "./view/compontents/button/button";
import "./slider-test.css"
import {ReactNode, useState} from "react";
import news_img1 from "./images/news/news_img1.jpg"
import news_img2 from "./images/news/news_img2.jpg"
import news_img3 from "./images/news/news_img3.jpg"
import {ArrowLeft, ArrowRight} from "./view/compontents/icons/arrows";

interface NewCard {
    id: string,
    heading: string,
    img: string,
    description: string,
    status: string,
}
const NewsCard = (props: NewCard) => {
    let darkType: string = "";
    let positionRegulator: string = "new-card_selected-position";
    if(props.status == "non-active"){
        darkType = "new-card__area_type_dark";
        positionRegulator = "new-card_non-selected-position";
    }
    return(
        <div className={"new-card" + " " + positionRegulator}>
            <div className={darkType}>
            </div>
            <div className={"new-card__header"}>
                <h4 className={"header__text usual-post-header"}>
                    {props.heading}
                </h4>
            </div>
            <div className={"new-card__image-place"}>
                <img  className={"new-card__image-place"} src = {props.img}/>
            </div>
            <div className={"card-content"}>
                <div className={"card-content__description"}>
                    <span className={"usual-post-content"}>
                        {props.description}
                    </span>
                </div>
                <div className={"card-content__link-button"}>
                    <LinkedCustomButton id={""} name={""} type={"button"} content={"Подробнее"} mod={"light"} contentClass={"usual-button-text_s"}/>
                </div>
            </div>
        </div>
    )
}

interface newsCollection {
    selectedItems: number;
}

const getActiveNews = (selectedNow: number, CardCollection: Array<NewCard>, maxCountNewsAtScreen: number): Array<ReactNode> => {
    let Cards: Array<ReactNode> = [];
    let currNew: number = 0;
    for(let k: number = selectedNow - 1; k < selectedNow + maxCountNewsAtScreen- 1; k++){
        if(k >= 0 && k < CardCollection.length){
            Cards[currNew] = <NewsCard id={CardCollection[k].id}
                                       heading={CardCollection[k].heading} img={CardCollection[k].img}
                                       description={CardCollection[k].description} status={CardCollection[k].status}/>
        }
        else{
            let currK: number = Math.abs(CardCollection.length - Math.abs(k));
            Cards[currNew] = <NewsCard id={CardCollection[currK].id}
                                       heading={CardCollection[currK].heading} img={CardCollection[currK].img}
                                       description={CardCollection[currK].description} status={CardCollection[currK].status}/>
        }
        currNew++;
    }
    return Cards;
}

const NewsCollection = (props: newsCollection) => {
    let selectedCards: number = props.selectedItems;
    const maxCountNewsAtScreen: number = 5;
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
            description: "В Марий Эл завершились раскопки древнего могильника в Моркинском районе",
            status: "non-active",
        },
        {
            id: "2",
            heading: "Кошелек из X века",
            img: news_img2,
            description: "В Чувашии обнаружили уникальный могильник 10 века",
            status: "non-active",
        },
        {
            id: "3",
            heading: "Раскопки могильника в Моркинском р-не",
            img: news_img3,
            description: "В Марий Эл археологи нашли кошелек из бобрового хвоста, изготовленный в X веке.",
            status: "non-active",
        },
        {
            id: "4",
            heading: "Какой-то текст",
            img: news_img1,
            description: "Здесь очень интересный и нестандартный текст",
            status: "non-active",
        },
        {
            id: "5",
            heading: "ЗАГОЛОВОК №6",
            img: news_img1,
            description: "Здесь очень интересный и нестандартный текст",
            status: "non-active",
        },
        {
            id: "6",
            heading: "ЗАГОЛОВОК №7",
            img: news_img1,
            description: "Здесь очень интересный и нестандартный текст",
            status: "non-active",
        },
        {
            id: "7",
            heading: "ЗАГОЛОВОК №8",
            img: news_img1,
            description: "Здесь очень интересный и нестандартный текст",
            status: "non-active",
        },
        {
            id: "8",
            heading: "ЗАГОЛОВОК №9",
            img: news_img1,
            description: "Здесь очень интересный и нестандартный текст",
            status: "non-active",
        }
    ];
    CardsCollection[selectedCards].status = "active";
    if (selectedCards + 1 > CardsCollection.length - 1){
        CardsCollection[selectedCards + 1 - CardsCollection.length].status = "active";
    } else {
        CardsCollection[selectedCards + 1].status = "active";
    }

    if (selectedCards + 2 > CardsCollection.length - 1){
        CardsCollection[selectedCards + 2 - CardsCollection.length].status = "active";
    } else {
        CardsCollection[selectedCards + 2].status = "active";
    }
    let Cards: Array<ReactNode> = [];
    Cards = getActiveNews(selectedCards, CardsCollection, maxCountNewsAtScreen);
    return(
        <div className = {"news-collection"}>
            {Cards}
        </div>
    )
}

const Slider = () => {
    const newsLength: number = 8;
    const [selectedNews, setSelectedNews] = useState(1);
    const newsShiftRight = (selectedNew: number, newsLength: number) => {
        let nextNew: number = selectedNew;
        if(nextNew < newsLength)
        {
            nextNew++;
        }
        else
        {
            nextNew = 0;
        }
        setSelectedNews(nextNew);
        console.log(selectedNews);
    }
    const newsShiftLeft = (selectedNew: number, newsLength: number) => {
        let nextNew: number = selectedNew;
        if(nextNew > 0)
        {
            nextNew--;
        }
        else
        {
            nextNew = newsLength;
        }
        setSelectedNews(nextNew);
        console.log(selectedNews);
    }

    return(
        <section className={"last-news"}>
            <div className={"news__header"}>
                <h3 className={"header__text usual-header-text"}>
                    Последние события
                </h3>
            </div>
            <div className = {"news__wrapper"}>
                <NewsCollection selectedItems={selectedNews}/>
            </div>
            <div className = {"arrow-left"} onClick={
                () => {
                    newsShiftLeft(selectedNews, newsLength);
                }
            }>
                <ArrowLeft/>
            </div>
            <div className = {"arrow-right"} onClick={
                () => {
                    newsShiftRight(selectedNews, newsLength);
                }
            }>
                <ArrowRight/>
            </div>
        </section>
    )
}

export {Slider}