import React from 'react';
import Header from './View/Components/Header/Header';
import Navbar from './View/Components/Navbar/Navbar';
import Profile from './View/Components/MainContent/Profile/Profile';
import Dialogs from './View/Components/MainContent/Dialogs/Dialogs';
import News from './View/Components/MainContent/News/News';
import Music from './View/Components/MainContent/Music/Music';
import { BrowserRouter, Route } from 'react-router-dom';

import './View/Styles/fonts.css';
import 'logo.svg';
import './App.css';

function App(props) {

  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path="/dialogs" render={() => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>} />
          <Route path="/profile" render={() => <Profile postsData={props.postsData} />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
