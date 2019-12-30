let store = {
    _state: {

        profilePage: {
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
        },

        dialogPage: {
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
            ]
        },

        myFriends: {
            friendItem: [{
                    id: 1,
                    name: 'Dima',
                    ava: true
                },
                {
                    id: 2,
                    name: 'Timur',
                    ava: true
                },
                {
                    id: 3,
                    name: 'Sasha',
                    ava: true
                },
                {
                    id: 4,
                    name: 'Jenya',
                    ava: true
                }
            ]
        }
    },
    _callObserver() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callObserver = observer;
        console.log('observer')
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let post = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.newPostText = '';
            this._state.profilePage.postsData.push(post);
            this._callObserver(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            console.log(action.newText);
            this._callObserver(this._state);
        }
    }
}

export default store;



window.store = store;