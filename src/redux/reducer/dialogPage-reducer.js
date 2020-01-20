const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {

    dialogsData: [{
            id: 1,
            name: 'Efim'
        },
        {
            id: 2,
            name: 'Dima'
        },
        {
            id: 3,
            name: 'Timur'
        },
    ],
    messagesData: [{
            id: 1,
            message: 'Hi!',
            come: 'in'
        },
        {
            id: 2,
            message: 'Hi!, how are you?',
            come: 'out'
        },
        {
            id: 3,
            message: 'How is your projects?',
            come: 'out'
        },
        {
            id: 4,
            message: 'My projects is yo',
            come: 'in'
        }
    ],
    newMessageText: ''
}

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.text;
            return state;
        case ADD_MESSAGE:
            let message = {
                id: 6,
                message: state.newMessageText
            };
            state.newMessageText = '';
            state.messagesData.push(message);
            return state;
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