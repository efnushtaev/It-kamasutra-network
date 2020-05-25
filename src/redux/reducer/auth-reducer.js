import {headerAPI, securityAPI} from "../../api/api";
import {stopSubmit} from 'redux-form';

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESSED = 'auth-reducer/GET_CAPTCHA_URL_SUCCESSED';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESSED:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    };
}

export const setAuthUsersData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const getCaptcaUrlSuccesed = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESSED,
    payload: {captchaUrl}
})


export const getAuthUsersData = () => (dispatch) => {
    return headerAPI.me().then(response => {
        if (response.resultCode === 0) {
            let {
                id,
                email,
                login
            } = response.data;
            dispatch(setAuthUsersData(id, email, login, true));
        }
    });
}
export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await headerAPI.login(email, password, rememberMe, captcha)
    if (response.resultCode === 0) {
        dispatch(getAuthUsersData());
    } else {
        if (response.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }

        let message = response.messages.length > 0 ? response.messages : 'Other error'
        dispatch(stopSubmit('login', {
            _error: message
        }))
    }
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.url
    dispatch(getCaptcaUrlSuccesed(captchaUrl))
}


export const logout = () => async (dispatch) => {
    let response = await headerAPI.logout()
    if (response.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false));
    }
}

export default authReducer;