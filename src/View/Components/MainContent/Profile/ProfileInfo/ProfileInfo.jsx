import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

let ProfileInfo = ({profile, status, updateStatus, isOwner, ...props}) => {
    if(!profile){
        return (
            <Preloader />
        )
    } 

    const onMainPhotoSelected = (e) => {
        e.target.files.length && props.savePhoto(e.target.files[0])
    }
    return (
        <div className={classes.container}>
            <div className={classes.ava}>
                <img src={profile.photos.large 
                ? profile.photos.large 
                : 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'} />
                {isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            <div className={classes.description}>
            </div>
        </div>
    )
}

export default ProfileInfo;