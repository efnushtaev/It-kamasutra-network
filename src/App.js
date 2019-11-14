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
  let postsData = [
    { id: 1, message: 'Hi! this is a first post', likesCount: '23' },
    { id: 2, message: 'And this is a second one', likesCount: '11' }
  ];
  let dialogsData = [
    { id: 1, name: 'Efim' },
    { id: 2, name: 'Dima' },
    { id: 3, name: 'Timur' },
  ];

  let messagesData = [
    { id: 1, message: 'Hi!' },
    { id: 2, message: 'Hi!, how are you?' },
    { id: 3, message: 'I\'m YO' }
  ]
  return (
    <BrowserRouter>

      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">

          <Route path="/dialogs" render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>} />
          <Route path="/profile" render={() => <Profile postsData={postsData} />} />

          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
