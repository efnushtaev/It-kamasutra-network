import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

let MyPosts = () => {
    return (
            <div className={classes.container}>
                <textarea></textarea>
                <button>Add post</button>
                <div>
                    <Post/>
                    <Post/>
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