import React from 'react';
import Header from './View/Components/Header/Header';
import Sidebar from './View/Components/Sidebar/Sidebar';
import Profile from './View/Components/MainContent/Profile/Profile';
import Dialogs from './View/Components/MainContent/Dialogs/Dialogs';
import News from './View/Components/MainContent/News/News';
import Music from './View/Components/MainContent/Music/Music';
import MyFriends from './View/Components/MainContent/MyFriends/MyFriends'
import { BrowserRouter, Route } from 'react-router-dom';

import './View/Styles/fonts.css';
import 'logo.svg';
import './App.css';

function App(props) {

  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <Sidebar />
        <div className="app-wrapper-content">

          <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogPage} />} />
          <Route path="/profile" render={() => <Profile 
                                                  profilePage={props.state.profilePage} 
                                                  dispatch={props.dispatch}
                                                  />} 
                                                />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />

          <Route path="/myfriends" render={() => <MyFriends state={props.state.myFriends} />} />
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
