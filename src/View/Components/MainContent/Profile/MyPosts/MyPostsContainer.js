import React from 'react';
import Post from './Post/Post';
import elFormsTextarea from './../../../../Styles/Elements/Forms/textarea.module.scss';
import { addPostCreateAction, updateNewPostTextCreateAction } from '../../../../../redux/reducer/profilePage-reducer';
import MyPosts from './MyPosts';
import store from '../../../../../redux/store-redux';

const MyPostsContainer = (props) => {
debugger;
let state = props.store.getState().profilePage;
    let addPost = () => {
        props.store.dispatch(addPostCreateAction())
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextCreateAction(text);
        props.store.dispatch(action);
    }


    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.postsData} newPostText={state.newPostText}/>
    )
}

export default MyPostsContainer;