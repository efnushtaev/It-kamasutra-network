import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader';

let ProfileInfo = (props) => {
    if(!props.profile){

        return (
            <Preloader />
        )
    } 
    return (
        <div className={classes.profile}>
            <div className={classes.inner}>
                <div className={classes.ava}>
                </div>
                <div className={classes.description}>
                    <img src={!props.profile.photos.large ? props.profile.photo.large : 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'  } />
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;