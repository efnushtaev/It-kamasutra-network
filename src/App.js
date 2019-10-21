import React from 'react';
import Header from './View/Components/Header/Header';
import Navbar from './View/Components/Navbar/Navbar';
import Profile from './View/Components/MainContent/Profile/Profile';
import Dialogs from './View/Components/MainContent/Dialogs/Dialogs';
import News from './View/Components/MainContent/News/News';
import Music from './View/Components/MainContent/Music/Music';
import {BrowserRouter, Route} from 'react-router-dom';

import './View/Styles/fonts.css';
import 'logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" component={Dialogs}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/news" component={News}/>
        <Route path="/music" component={Music}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
