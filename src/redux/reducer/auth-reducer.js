import { headerAPI } from "../../api/api";

const SET_USER_DATA = 'SET_USER_DATA';
// const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }

            default:
                return state;
    };

}

export const setAuthUsersData = (userId, email, login) => ({
    type: SET_USER_DATA,
    data: {
        userId,
        email,
        login
    }
})
export const getAuthUsersData = () => {
    return (dispatch) => {
        headerAPI.login().then(response => {
            if(response.resultCode === 0) {
                let {id, email, login} = response.data;
                dispatch(setAuthUsersData(id, email, login));
            }
        });
    }
}
export default authReducer;