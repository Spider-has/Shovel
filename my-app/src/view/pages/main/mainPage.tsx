import {Header} from '../../compontents/header/header'
import {MenuPanel} from "../../compontents/menuPanel/menuPanel";
import {NewsArea} from "../../compontents/mainPageContent/newsBlock/newsBlock";
import {FirstParagraphArea} from "../../compontents/mainPageContent/startParagraph/startParagraph";
import {MapArea} from "../../compontents/mainPageContent/map/map";
import {RecordGuideArea} from "../../compontents/mainPageContent/recordGuide/recordGuide";
import {SliderArea} from "../../compontents/mainPageContent/photoSlider/photoSlider";
import {Footer} from "../../compontents/mainPageContent/footer/footer";

function MainPage() {
    return (
        <div className={"page-wrapper"}>
            <Header/>
            <MenuPanel/>
            <FirstParagraphArea/>
            <NewsArea/>
            <MapArea/>
            <RecordGuideArea/>
            <SliderArea/>
            <Footer/>
        </div>
    );
}

export {MainPage};