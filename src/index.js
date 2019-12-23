import state, { subscribe } from './redux/state';
import * as serviceWorker from './serviceWorker';
// import App from './list';


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import App from './list';
import {BrowserRouter} from 'react-router-dom';

import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';



export let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App 
                state={state} 
                addPost={addPost}
                updateNewPostText={updateNewPostText}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);
// export default rerenderEntireTree;
// ReactDOM.render(<List />, document.getElementById('roote'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();