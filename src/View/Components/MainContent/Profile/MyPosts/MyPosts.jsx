import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import elFormsTextarea from './../../../../Styles/Elements/Forms/textarea.module.scss';

const MyPosts = (props) => {
    let newPost = React.createRef();

    let addPost = () => {
        let post = newPost.current.value;
        props.addPost(post);
        newPost.current.value = null;
    }

    let postElements =
        props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={classes.container}>
            <div className={elFormsTextarea.container}>

                <textarea placeholder="NEW POST..." ref={newPost}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;