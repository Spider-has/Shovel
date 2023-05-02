import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import { CustomButton } from './view/compontents/button/button';
import { button } from './interface/interface';
import { Header} from './view/compontents/header/header'
import {MenuPanel} from "./view/compontents/menuPanel/menuPanel";
import {NewsArea} from "./view/compontents/mainPageContent/newsBlock/newsBlock";
import {FirstParagraphArea} from "./view/compontents/mainPageContent/startParagraph/startParagraph";
import {MapArea} from "./view/compontents/mainPageContent/map/map";
import {RecordGuideArea} from "./view/compontents/mainPageContent/recordGuide/recordGuide";

function App() {
  return (
    <div>
    <Header/>
    <MenuPanel/>
    <FirstParagraphArea/>
    <NewsArea/>
    <MapArea/>
    <RecordGuideArea/>
    </div>
  );
}

export default App;
