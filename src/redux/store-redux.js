import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import dialogPageReducer from './reducer/dialogPage-reducer';
import profilePageReducer from './reducer/profilePage-reducer';
import usersPageReducer from './reducer/usersPage-reducer';
import authReducer from './reducer/auth-reducer';
import thunkMiddlewear from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import appReducer from './reducer/app-reducer';

let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    app:appReducer,
    form: formReducer
})

//redux devtool extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddlewear)));

// let store = createStore(reducers, applyMiddleware(thunkMiddlewear));

window.store = store;
export default store;