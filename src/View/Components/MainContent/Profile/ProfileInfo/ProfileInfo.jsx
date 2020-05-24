import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileInfoDescriptionForm from './ProfileInfoDescriptionForm';

let ProfileInfo = ({profile, status, updateStatus, isOwner, saveProfile, ...props}) => {
    debugger
    const [editMode, setEditMode] = useState(false)

    if(!profile){
        return (
            <Preloader />
        )
    } 
    const onSubmit = (formData) => {
        debugger
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
        // 
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

            { editMode ? 
                <ProfileInfoDescriptionForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> : 
                <ProfileInfoDescription isOwner={isOwner} profile={profile} onEditMode={() => setEditMode(true)} />
            }
        </div>
    )
}

const ProfileInfoDescription = ({profile, isOwner, onEditMode}) => {
    return (
        <div className={classes.description}>
        {isOwner && <button onClick={onEditMode}>edit</button>}

            <div>
                <b>Full name</b>: {profile.fullName}
            </div>
            <div>
                <b>Looking for a job</b>: {profile.lookingForAJob ? 'Yes' : 'No'}
            </div>
            <div>
                <b>Mt professional skills</b>: {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>About me</b>: {profile.aboutMe}
            </div>
            <div>
                
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)}
            </div>
        </div>
    )
}

    const Contacts = ({contactTitle, contactValue}) => {
        return (
            <div>
                <b>{contactTitle}:</b>{contactValue}
            </div>
        )
    }

export default ProfileInfo;