import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = () => {
    let postsData = [
        { id: 1, message: 'Hi! this is a first post', likesCount: '23' },
        { id: 2, message: 'And this is a second one', likesCount: '11' }
    ]

    let postElements =
        postsData.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    return (
        <div className={classes.container}>
            <textarea></textarea>
            <button>Add post</button>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;