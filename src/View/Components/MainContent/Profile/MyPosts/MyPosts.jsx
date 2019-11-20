import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';

const MyPosts = (props) => {
    let newPost = React.createRef();

    let addPost = () => {
        let post = newPost.current.value;
        alert(post);
    }

    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={classes.container}>
            <textarea ref={newPost}></textarea>
            <button onClick={addPost}>Add post</button>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;