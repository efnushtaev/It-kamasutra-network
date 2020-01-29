const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

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
newPostText: ''
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
        default:
            return state;
    }
}

export const addPostCreateAction = () => ({
    type: ADD_POST
});
export const updateNewPostTextCreateAction = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profilePageReducer;