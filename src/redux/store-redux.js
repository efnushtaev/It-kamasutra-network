import {
    createStore,
    combineReducers
} from 'redux';
import dialogPageReducer from './reducer/dialogPage-reducer';
import profilePageReducer from './reducer/profilePage-reducer';
import usersPageReducer from './reducer/usersPage-reducer';
import authReducer from './reducer/auth-reducer';


let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})
let store = createStore(reducers);

window.store = store;

export default store;