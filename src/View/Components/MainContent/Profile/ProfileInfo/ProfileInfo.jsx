import React from 'react';
import classes from './ProfileInfo.module.css';

let ProfileInfo = () => {
    return (
        <div className={classes.profile}>
            <div className={classes.inner}>
                <div className={classes.ava}>
                </div>
                <div className={classes.description}>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;