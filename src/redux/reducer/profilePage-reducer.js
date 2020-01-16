const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profilePageReducer = (action, state) => {
    if (action.type === ADD_POST) {


    let post = {
        id: 3,
        message: state.newPostText,
        likesCount: 0
    };
    state.newPostText = '';
    state.postsData.push(post);
} else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newText;
}
return state;
}

export default profilePageReducer;