import {CustomButton, LinkedCustomButton} from "../../button/button";
import "./newsBlock.css"
import {ReactNode, useState} from "react";
import news_img1 from "../../../../images/news/news_img1.jpg"
import news_img2 from "../../../../images/news/news_img2.jpg"
import news_img3 from "../../../../images/news/news_img3.jpg"
import {ArrowLeft, ArrowRight} from "../../icons/arrows";

interface NewCard {
    id: string,
    heading: string,
    img: string,
    description: string,
    status: string,
}

interface NewsCollectionData{
    firstSelectedNew: number,
    newsLength: number,
}
var newsData: NewsCollectionData = {
    firstSelectedNew: 1,
    newsLength: 0,
};

const newsShiftRight = () => {
    if(newsData.firstSelectedNew < newsData.newsLength)
    {
        newsData.firstSelectedNew++;
    }
    else
    {
        newsData.firstSelectedNew = 0;
    }
    console.log(newsData);
}

const newsShiftLeft = () => {
    if(newsData.firstSelectedNew > 0)
    {
        newsData.firstSelectedNew--;
    }
    else
    {
        newsData.firstSelectedNew = newsData.newsLength;
    }
    console.log(newsData);
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

interface news{
    newsCards: Array<NewCard>,
}

const NewsCollection = (props: news) => {
   // console.log(props.selectedItems)
    //let selectedCards: number = props.selectedItems;
    /*let CardsCollection: Array<NewCard> = [
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
        }
    ];*/
    /* newsData.newsLength = CardsCollection.length;
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
    }*/
    let Cards: Array<ReactNode> = props.newsCards.map(({id, heading, img, description, status}) => {
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
    let selectedItem = 1;
    const [selectedNews, setSelectedNew] = useState([
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
            description: "В Марий Эл археологи нашли кошелек из бобрового хвоста, изготовленный в X веке.",
            status: "active",
        },
        {
            id: "4",
            heading: "Какой-то текст",
            img: news_img1,
            description: "Здесь очень интересный и нестандартный текст",
            status: "non-active",
        }
    ])
    return(
        <section className={"last-news"}>
            <div className={"news__header"}>
                <h3 className={"header__text usual-header-text"}>
                    Последние события
                </h3>
            </div>
            <div className = {"news__wrapper"}>
                <NewsCollection newsCards={selectedNews}/>
            </div>
            <div className = {"arrow-left"} onClick={
                () => {
                    const temp = selectedNews[0];
                    //setSelectedNew(selectedNews[selectedItem].status = "active")
                }
            }>
                <ArrowLeft/>
            </div>
            <div className = {"arrow-right"} onClick={
                () => {
                    newsShiftRight();
                }
            }>
                <ArrowRight/>
            </div>
        </section>
    )
}

export {NewsArea}