import React from 'react';
import logo from './logo.svg';
import './App.css';
import { type } from 'os';
import { CustomButton } from './view/compontents/button/button';
import { button } from './interface/interface';
import { Header} from './view/compontents/header/header'
import {MenuPanel} from "./view/compontents/menuPanel/menuPanel";



function App() {
  const Button: button = {
    id: "#1",
    name: "based button",
    type: undefined,
    content: "Записаться на раскопки",
    mod: undefined,
  }
  return (
    <div>
      <Header/>
      <MenuPanel/>
    </div>
  );
}

export default App;
