import state from './redux/state';
import * as serviceWorker from './serviceWorker';
import {rerenderEntireTree} from './render'
// import App from './list';

rerenderEntireTree(state)

serviceWorker.unregister();