import { addPost, onPostChange } from '../../../../../redux/reducer/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
};

const MyPostsContainer = connect(mapStateToProps, { addPost, onPostChange } )(MyPosts)

export default MyPostsContainer;