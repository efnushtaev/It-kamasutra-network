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
        case ADD_POST:
            let post = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = '';
            state.postsData.push(post);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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