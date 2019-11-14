import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App from './list';

import * as serviceWorker from './serviceWorker';

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

ReactDOM.render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>, document.getElementById('root'));
// ReactDOM.render(<List />, document.getElementById('roote'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
