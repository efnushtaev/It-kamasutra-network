import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = () => {

    let postsData = [
        { id: 1, message: 'Hi! this is a first post', likesCount: '23' },
        { id: 2, message: 'And this is a second one', likesCount: '11' }
    ]

    return (
        <main>
           <ProfileInfo />
           <MyPosts postsData={postsData}/>
        </main>
    )
}

export default Profile;