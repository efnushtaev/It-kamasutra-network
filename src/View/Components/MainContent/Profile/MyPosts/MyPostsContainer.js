import React from 'react';
import Post from './Post/Post';
import elFormsTextarea from './../../../../Styles/Elements/Forms/textarea.module.scss';
import { addPostCreateAction, updateNewPostTextCreateAction } from '../../../../../redux/reducer/profilePage-reducer';
import MyPosts from './MyPosts';
import store from '../../../../../redux/store-redux';
import StoreContext from '../../../../../StoreContext';
const MyPostsContainer = () => {






    return (
        <StoreContext.Consumer>
            {(store) => {

    
            let state = store.getState().profilePage;
            let addPost = () => {
                store.dispatch(addPostCreateAction())
            }

            let onPostChange = (text) => {
                let action = updateNewPostTextCreateAction(text);
               store.dispatch(action);
            }
            
           return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.postsData} newPostText={state.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;