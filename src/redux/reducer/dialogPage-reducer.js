const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const dialogPageReducer = (action, state) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
        state.newMessageText = action.text;
        case ADD_MESSAGE:
        let message = {
            id: 6,
            message: state.newMessageText
        };
        state.newMessageText = '';
        state.messagesData.push(message);
        default:
            return state;
    }
}

export const updateNewMessageCreateAction = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
})
export const addMessageActionCreate = () => ({
    type: ADD_MESSAGE
})


export default dialogPageReducer;