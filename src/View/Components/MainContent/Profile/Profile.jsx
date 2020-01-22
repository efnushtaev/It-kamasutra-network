import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = (props) => {
debugger;
    return (
        <main>
           <ProfileInfo />
           <MyPostsContainer store={props.store} />
        </main>
    )
}

export default Profile;