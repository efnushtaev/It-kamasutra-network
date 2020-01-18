const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profilePageReducer = (action, state) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            };
            state.newPostText = '';
            state.postsData.push(post);
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
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