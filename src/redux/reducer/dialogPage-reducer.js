

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE'; 
const dialogPageReducer = (action, state) => {


    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.text;
    } else if (action.type === ADD_MESSAGE) {
        let message = {
            id: 6,
            message: state.newMessageText
        };
        state.newMessageText ='';
        state.messagesData.push(message);
    }   
return state;
}

export default dialogPageReducer;