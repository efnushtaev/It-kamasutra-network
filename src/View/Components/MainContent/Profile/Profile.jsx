import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = (props) => {
    return (
        <main>
           <ProfileInfo />
           <MyPostsContainer />
        </main>
    )
}

export default Profile;