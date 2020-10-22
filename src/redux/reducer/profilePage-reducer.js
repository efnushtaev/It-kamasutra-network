import {profileAPI} from "../../api/api";
import { stopSubmit } from "redux-form";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETED_POST = 'DELETED_POST';
const SAVE_PHOTOS_SUCCESS = 'SAVE_PHOTOS_SUCCESS'

let initialState = {
    postsData: [{
            id: 1,
            message: 'Hi! this is a first post',
            likesCount: '23',
            isLiked: true
        },
        {
            id: 2,
            message: 'And this is a second one',
            likesCount: '11',
            isLiked: false
        }
    ],
    newPostBody: '',
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
                postsData: [...state.postsData, {
                    id: 3,
                    message: action.text,
                    likesCount: 0
                }],
                newPostBody: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS:  {
            return {
                ...state,
                status:action.status
            }
        }
        case DELETED_POST:  {
            return {
                ...state,
                postsData: [...state.postsData.filter(item => item.id != action.postId)]
            }
        }
        case SAVE_PHOTOS_SUCCESS:  {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        }
        default:
            return state;
    }
}

export const addPost = (text) => ({
    type: ADD_POST,
    text
});
export const deletedPost = (postId) => ({
    type: "DELETED_POST",
    postId
});

export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export const setStatus = (status) => ({
    type: SET_STATUS,
    status
})
export const savePhotoSuccess = (photos)=> ({
    type: SAVE_PHOTOS_SUCCESS,
    photos
})

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.setStatus(userId)
    dispatch(setStatus(response))
}
export const updateStatus = (status) => async (dispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if(response.data.resultCode === 0) dispatch(setStatus(status))
        
    } catch (error) {
        
    }
}
export const getProfileThunk = (userId) => async (dispatch) => {
    let response = await profileAPI.setProfile(userId)
    dispatch(setUserProfile(response))
}

export const savePhoto = (file) => async (dispatch) => {
    const response  = await profileAPI.savePhoto(file)
    if(response.data.resultCode === 0) dispatch(savePhotoSuccess(response.data.data.photos))
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const response  = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0) {
        dispatch(getProfileThunk(userId))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Other error'
        function createErrorValue (str) {
            const ErrorValue = {}
            const key = str.slice(str.indexOf('->') + 2, str.length - 1).toLowerCase()
            const value = str
            ErrorValue[key] = value
            return ErrorValue
        }
        message.indexOf('Contacts') != -1 
            ? dispatch(stopSubmit('edit-profile', {'contacts': createErrorValue(message)}))
            :dispatch(stopSubmit('edit-profile', {_error: message}))
        // const contactsType = parseError(message)
        // dispatch(stopSubmit('edit-profile', {'contacts': {contactsType: message}}))
        return Promise.reject()
    }
}

export default profilePageReducer;