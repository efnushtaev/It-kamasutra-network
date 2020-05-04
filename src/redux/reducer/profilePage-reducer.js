import {
    profileAPI
} from "../../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [{
            id: 1,
            message: 'Hi! this is a first post',
            likesCount: '23'
        },
        {
            id: 2,
            message: 'And this is a second one',
            likesCount: '11'
        }
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            return {
                postsData: [...state.postsData, {
                    id: 3,
                    message: action.text,
                    likesCount: 0
                }],
                newPostText: ''
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
        case "DELETED_POST":  {
            return {
                ...state,
                postsData: [...state.postsData.filter(item => item.id != action.postId)]
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

export const getStatus = (userId) => (dispatch) => {
    profileAPI.setStatus(userId).then(response => {
        dispatch(setStatus(response))
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        debugger
        if(response.data.resultCode === 0) dispatch(setStatus(status))
    })
}
export const getProfileThunk = (userId) => {
    return (dispatch) => {
        profileAPI.setProfile(userId).then(response => {
            dispatch(setUserProfile(response))
        });
    }
}
export default profilePageReducer;