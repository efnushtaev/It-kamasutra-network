import React from 'react';
import Header from './View/Components/Header/Header';
import Sidebar from './View/Components/Sidebar/Sidebar';
import Profile from './View/Components/MainContent/Profile/Profile';
import DialogsContainer from './View/Components/MainContent/Dialogs/DialogsContainer';
import News from './View/Components/MainContent/News/News';
import UsersContainer from './View/Components/MainContent/Users/UsersContainer';
import Music from './View/Components/MainContent/Music/Music';
import MyFriends from './View/Components/MainContent/MyFriends/MyFriends'
import { BrowserRouter, Route } from 'react-router-dom';

import './View/Styles/fonts.css';
import 'logo.svg';
import './App.css';
import { useStore } from 'react-redux';

function App(props) {

  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">

          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile" render={() => <Profile />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />

          <Route path="/myfriends" render={() => <MyFriends state={props.state.myFriends} />} />
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
