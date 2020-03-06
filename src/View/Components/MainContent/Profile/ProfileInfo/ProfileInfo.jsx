import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader';
import ProfileStatus from './ProfileStatus'

let ProfileInfo = (props) => {
    if(!props.profile){
        return (
            <Preloader />
        )
    } 
    return (
        <div className={classes.container}>
            <div className={classes.ava}>
                <img src={  props.profile.photos.large 
                ? props.profile.photos.large 
                : 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'} />
            </div>
            <ProfileStatus status="Hello" />
            <div className={classes.description}>
            </div>
        </div>
    )
}

export default ProfileInfo;