import React from 'react';
import Header from './View/Components/Header/Header';
import Navbar from './View/Components/Navbar/Navbar';
import Profile from './View/Components/Profile/Profile';

import './View/Styles/fonts.css';
import 'logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <Profile/>     
    </div>
  );
}

export default App;
