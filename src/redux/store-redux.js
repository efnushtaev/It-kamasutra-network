import {
    createStore,
    combineReducers
} from 'redux';
import dialogPageReducer from './reducer/dialogPage-reducer';
import profilePageReducer from './reducer/profilePage-reducer';


let reducers = combineReducers({
    dialogPage: dialogPageReducer,
    profilePage: profilePageReducer
})
let store = createStore(reducers);

export default store;