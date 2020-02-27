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
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText:action.text
            };
        }
        case ADD_MESSAGE: {
            return {
                ...state,
                messagesData:[...state.messagesData, {id:6, message: state.newMessageText }],
                newMessageText: ''
            };
        }
        default:
            return state;
    }
}

export const updatingBodyMessage = (text) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    text: text
})
export const postNewMessage = () => ({
    type: ADD_MESSAGE
})


export default dialogPageReducer;