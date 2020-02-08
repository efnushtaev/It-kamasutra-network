import {
    createStore,
    combineReducers
} from 'redux';
import dialogPageReducer from './reducer/dialogPage-reducer';
import profilePageReducer from './reducer/profilePage-reducer';
import usersPageReducer from './reducer/usersPage-reducer';


let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer
})
let store = createStore(reducers);

window.store = store;

export default store;