import { addPost } from '../../../../../redux/reducer/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData,
        newPostBody: state.profilePage.newPostBody,
        profile: state.profilePage.profile
    }
};

export default connect(mapStateToProps, { addPost } )(MyPosts)