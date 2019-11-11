import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    let postData = [
        { id: 1, message: 'Hi! this is a first post', likesCount: '23'}, 
        { id: 2, message: 'And this is a second one', likesCount: '11'}
    ]
    return (
            <div className={classes.container}>
                <textarea></textarea>
                <button>Add post</button>
                <div>
                    <Post message={messageData[0].message} likesCount={messageData[0].likesCount}/>
                    <Post message={messageData[1].message} likesCount={messageData[1].likesCount}/>
                </div>
            </div>
    )
}

export default MyPosts;