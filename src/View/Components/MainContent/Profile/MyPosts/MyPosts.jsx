import React from 'react';
import Post from './Post/Post';
import classes from './MyPosts.module.css';
import elFormsTextarea from './../../../../Styles/Elements/Forms/textarea.module.scss';
import { addPostCreateAction, updateNewPostTextCreateAction } from '../../../../../redux/reducer/profilePage-reducer';

const MyPosts = (props) => {
    let newPost = React.createRef();

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text)
    }

    let onAddPost = () => {
        props.addPost();
    }

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)

    return (
        <div className={classes.container}>
            <div className={elFormsTextarea.container}>

                <textarea placeholder="NEW POST..." ref={newPost} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;