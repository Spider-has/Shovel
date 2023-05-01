import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import { CustomButton } from './view/compontents/button/button';
import { button } from './interface/interface';
import { Header} from './view/compontents/header/header'
import {MenuPanel} from "./view/compontents/menuPanel/menuPanel";
import {NewsArea} from "./view/compontents/mainPageContent/newsBlock/newsBlock";


function App() {
  return (
    <div>
      <Header/>
      <MenuPanel/>
      <NewsArea/>
    </div>
  );
}

export default App;
