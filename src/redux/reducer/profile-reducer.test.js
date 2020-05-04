import profilePageReducer, { addPost, deletedPost }  from './profilePage-reducer';
import React from 'react'
 

it('length of post should be incremented', () => {
    let action = addPost('post tested');
    let state = {
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
    };
    let newState = profilePageReducer(state, action)

    expect(newState.postsData.length).toBe(3)
  });
it('post should be deleted', () => {
    let action = deletedPost(2);
    let state = {
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
    };
    let newState = profilePageReducer(state, action)

    expect(newState.postsData.length).toBe(1)
  });
  