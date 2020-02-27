import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = (props) => {
    return (
        <main className={classes.container}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;