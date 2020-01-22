import React from 'react';
import Header from './View/Components/Header/Header';
import Sidebar from './View/Components/Sidebar/Sidebar';
import Profile from './View/Components/MainContent/Profile/Profile';
import DialogsContainer from './View/Components/MainContent/Dialogs/DialogsContainer';
import News from './View/Components/MainContent/News/News';
import Music from './View/Components/MainContent/Music/Music';
import MyFriends from './View/Components/MainContent/MyFriends/MyFriends'
import { BrowserRouter, Route } from 'react-router-dom';

import './View/Styles/fonts.css';
import 'logo.svg';
import './App.css';

function App(props) {
debugger;
  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">

          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} />} />
          <Route path="/profile" render={() => <Profile store={props.store} />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />

          <Route path="/myfriends" render={() => <MyFriends state={props.state.myFriends} />} />
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
