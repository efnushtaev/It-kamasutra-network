import React from 'react';
import Post from './Post/Post';
import elFormsTextarea from './../../../../Styles/Elements/Forms/textarea.module.scss';
import { addPostCreateAction, updateNewPostTextCreateAction } from '../../../../../redux/reducer/profilePage-reducer';
import MyPosts from './MyPosts';
import store from '../../../../../redux/store-redux';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
    debugger;
     return {
         addPost: () => {
            dispatch(addPostCreateAction())
         },
         onPostChange: (text) => {
            dispatch(updateNewPostTextCreateAction(text));
         }
     }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps )(MyPosts)

export default MyPostsContainer;