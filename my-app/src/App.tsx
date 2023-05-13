import React from 'react';
import './App.css';
import { Header} from './view/compontents/header/header'
import {MenuPanel} from "./view/compontents/menuPanel/menuPanel";
import {NewsArea} from "./view/compontents/mainPageContent/newsBlock/newsBlock";
import {FirstParagraphArea} from "./view/compontents/mainPageContent/startParagraph/startParagraph";
import {MapArea} from "./view/compontents/mainPageContent/map/map";
import {RecordGuideArea} from "./view/compontents/mainPageContent/recordGuide/recordGuide";
import {SliderArea} from "./view/compontents/mainPageContent/photoSlider/photoSlider";
import {Footer} from "./view/compontents/mainPageContent/footer/footer";
import {TimeFeedHeader} from "./view/compontents/timeFeedContent/header/header";
import {TimeLine} from "./view/compontents/timeFeedContent/timeLine/timeLine";

function App() {
  return (
    <div className={"page-wrapper"}>
      {/*<Header/>
    <MenuPanel/>
    <FirstParagraphArea/>
    <NewsArea/>
    <MapArea/>
    <RecordGuideArea/>
    <SliderArea/>
    <Footer/>*/}
    <TimeFeedHeader/>
      <TimeLine/>
    </div>
  );
}

export default App;
