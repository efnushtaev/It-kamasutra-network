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
        ]
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
                message: 'Hi!, how are you?'
            },
            {
                id: 3,
                message: 'How is your projects?'
            }
        ]
    }
}

export default state;