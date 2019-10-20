import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

let Profile = () => {
    return (
        <main>
            <div className={classes.profile}> 
                <div className={classes.inner}>

                    <div className={classes.ava}>
                    </div>
                    <div className={classes.description}>
                    </div>
                </div>
            </div>
           <MyPosts/>
        </main>
    )
}

export default Profile;