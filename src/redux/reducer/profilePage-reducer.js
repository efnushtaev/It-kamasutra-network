const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'; 

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
profile: null
}

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:{
            let body = state.newPostText;
            return {
                postsData:[...state.postsData, {id:3, message:body, likesCount:0}],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText:action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile

            }
        }
        default:
            return state;
    }
}

export const addPost = () => ({
    type: ADD_POST
});
export const onPostChange = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE,
    profile
})
export default profilePageReducer;