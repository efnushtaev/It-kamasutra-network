import React, {useState} from 'react';
import styles from './ProfileInfo.module.scss';
import Preloader from '../../../Common/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileInfoDescriptionForm from './ProfileInfoDescriptionForm';

let ProfileInfo = ({profile, status, updateStatus, isOwner, saveProfile, ...props}) => {
    const [editMode, setEditMode] = useState(false)

    if(!profile){
        return (
            <Preloader />
        )
    } 
    const onSubmit = (formData) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    
    const onMainPhotoSelected = (e) => {
        e.target.files.length && props.savePhoto(e.target.files[0])
    }

    const ProfileInfoDescription = ({profile, isOwner, onEditMode}) => {
        return (
            <div className={styles.description}>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                <div className={styles.description__info}>
                    <div className={styles.description__infoButton}>
                        {isOwner 
                            && <img 
                                src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAXCAYAAAARIY8tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFCSURBVHgB5ZXhbcIwEIUviAEyQroB3SBM0HqCphN0hIQJSjdoJ4gzQRmBDcgG7QRJ31POkkEusiP4A0867Bjne7bvrIhcWZlcSF3XvYzjWCFejTH9RQ0AfwN4i+4vA/21MzkyaNs2R5PHQB0A8BrAJsuy7TAMG7TfZDiThQcv8OchJjC98uHoWh4P2gKtYYt5NecsvUWV6vwgEat3cMQGzw0WWOnqewbHTw2Otn5OHpwJ/dThnUw5yP0cLCRRIbgeL1cvPjzZIBVOLRPg71rnYBgbgofei9oBQI3C1wE46/6RY84s2QAvPgHyBfg+AKcpk1siimQDvXwrmaqEz2UA/q9idrDSXdTW2h9X6zFwKibJex6PTDX+gdjF3JVoA11lJTOVfNHuz8DPQc8fVMpB5il3DF+nH5xn0bKcKesu4+3oDwzz9f/YCsOcAAAAAElFTkSuQmCC'} 
                                onClick={onEditMode}
                            />
                        }
                    </div>
                    <div className={styles.description__infoContainer}>
                        <div className={styles.description__fullName}>{profile.fullName}</div>
                        <div className={styles.description__lookingForAJob}>{profile.lookingForAJob ? 'Looking for a job' : ''} </div>
                        <div><small><i>Professional skills</i></small>:&ensp;{profile.lookingForAJobDescription}</div>
                        <div><small><i>About me</i></small>:&ensp;{profile.aboutMe}</div>
                        <div className={styles.description__contacts}>
                            <div><small><i>Contacts:</i></small></div>
                            <div className={styles.description__contactsContainer}>
                                {Object.keys(profile.contacts).map(key => <Contacts key={key} contactTitle={key} contactValue={profile.contacts[key]}/>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
        const Contacts = ({contactTitle, contactValue}) => {
            return contactValue 
                ? <div><span className={styles.description__contactTitle}><small>{contactTitle}:&ensp;</small></span>{contactValue}</div>
                : null
        }
        
    return (
        <div className={styles.container}>
            <div className={styles.ava}>
                <img src={profile.photos.large 
                ? profile.photos.large 
                : 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'} />
                {isOwner && <label for='ava'><input id='ava' type={"file"} onChange={onMainPhotoSelected}/></label>}
            </div>

            {/* <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/> */}

            { editMode ? 
                <ProfileInfoDescriptionForm initialValues={profile} onSubmit={onSubmit} profile={profile} /> : 
                <ProfileInfoDescription isOwner={isOwner} profile={profile} onEditMode={() => setEditMode(true)} />
            }
        </div>
    )
}


export default ProfileInfo;