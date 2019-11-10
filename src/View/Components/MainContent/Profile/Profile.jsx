import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = () => {
    return (
        <main>
           <ProfileInfo />
           <MyPosts/>
        </main>
    )
}

export default Profile;