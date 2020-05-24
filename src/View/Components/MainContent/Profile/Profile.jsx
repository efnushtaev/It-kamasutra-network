import React from 'react';
import classes from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

let Profile = ({isOwner,profile,status,updateStatus,saveProfile,...props}) => {
    return (
        <main className={classes.container}>
            <ProfileInfo    
                isOwner={isOwner}
                profile={profile} 
                status={status} 
                updateStatus={updateStatus}
                saveProfile={saveProfile}
                {...props} />
            <MyPostsContainer />
        </main>
    )
}

export default Profile;