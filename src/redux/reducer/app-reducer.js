import { headerAPI } from "../../api/api";
import {stopSubmit} from 'redux-form'
import { getAuthUsersData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            
            return {
                ...state,
                initialized: true
            }

            default:
                return state;
    };

}

export const initializedSucess = () => ({type: INITIALIZED_SUCCESS})

export const initializeApp = () => (dispatch) => {
    
       let promise = dispatch(getAuthUsersData());

       Promise.all([promise]).then(() => {
        
           dispatch(initializedSucess())
       })

       
}

export default appReducer; 