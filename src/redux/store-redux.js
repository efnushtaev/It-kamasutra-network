import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import dialogPageReducer from './reducer/dialogPage-reducer';
import profilePageReducer from './reducer/profilePage-reducer';
import usersPageReducer from './reducer/usersPage-reducer';
import authReducer from './reducer/auth-reducer';
import thunkMiddlewear from 'redux-thunk'


let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddlewear));

window.store = store;

export default store;