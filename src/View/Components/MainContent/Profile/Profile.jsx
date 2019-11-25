import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = (props) => {

    return (
        <main>
           <ProfileInfo />
           <MyPosts posts={props.state.postsData} addPost={props.addPost}/>
        </main>
    )
}

export default Profile;