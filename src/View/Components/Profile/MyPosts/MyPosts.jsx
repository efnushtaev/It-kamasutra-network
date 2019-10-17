import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

let MyPosts = () => {
    return (
            <div className={classes.container}>
                <textarea></textarea>
                <button>Add post</button>
                <div>
                    <Post message="Hi! this is a first post"/>
                    <Post message="And this is a second one"/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
    )
}

export default MyPosts;