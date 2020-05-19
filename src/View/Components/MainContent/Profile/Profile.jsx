import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = ({isOwner,profile,status,updateStatus,...props}) => {
    return (
        <main className={classes.container}>
            <ProfileInfo    
                isOwner={isOwner}
                profile={profile} 
                status={status} 
                updateStatus={updateStatus}
                {...props} />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;