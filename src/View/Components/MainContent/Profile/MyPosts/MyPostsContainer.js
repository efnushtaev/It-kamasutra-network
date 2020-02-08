import { addPostCreateAction, updateNewPostTextCreateAction } from '../../../../../redux/reducer/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

let mapDispatchToProps = (dispatch) => {
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