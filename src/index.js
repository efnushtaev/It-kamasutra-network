import store from './redux/store-redux';
import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';



export let rerenderEntireTree = (store) => {
    console.log('rerender')
    ReactDOM.render(
        <BrowserRouter>
            <App 
                store={store}
                state={store.getState()}
            />
        </BrowserRouter>, document.getElementById('root')
    );
}

rerenderEntireTree(store);

store.subscribe(()=>{
    // let state = store.getState()
    rerenderEntireTree(store)
});
// export default rerenderEntireTree;
// ReactDOM.render(<List />, document.getElementById('roote'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();