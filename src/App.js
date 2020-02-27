import React from 'react';
import HeaderContainer from './View/Components/Header/HeaderContainer';
import Sidebar from './View/Components/Sidebar/Sidebar';
import ProfileContainer from './View/Components/MainContent/Profile/ProfileContainer';
import DialogsContainer from './View/Components/MainContent/Dialogs/DialogsContainer';
import UsersContainer from './View/Components/MainContent/Users/UsersContainer';
import { BrowserRouter, Route } from 'react-router-dom';

import './View/Styles/fonts.css';
import 'logo.svg';
import './App.css';

function App() {

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Sidebar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />} />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
