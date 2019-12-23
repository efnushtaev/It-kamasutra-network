let rerenderEntireTree = () => {
    console.log('Staged');
}

export let subscribe = (observer) => {
    rerenderEntireTree = observer
}



let state = {

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
}

export let addPost = (textPost) => {

    let post = {
        id: 3,
        message: textPost,
        likesCount: 0
    };
    state.profilePage.newPostText = '';

    state.profilePage.postsData.push(post);
    rerenderEntireTree(state);
}

export let updateNewPostText = (text) => {
    state.profilePage.newPostText = text;
    console.log(text);
    rerenderEntireTree(state);
}

export default state;



window.state = state;