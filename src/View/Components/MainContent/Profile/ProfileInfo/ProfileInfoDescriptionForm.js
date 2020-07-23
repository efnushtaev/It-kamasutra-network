import React from 'react';
import classes from './ProfileInfo.module.scss';
import {CreateField, Input, Textarea} from './../../../Common/FormsControls/index'
import style from './../../../Common/FormsControls/style.module.scss'
import { reduxForm } from 'redux-form';

const ProfileInfoDescriptionForm = ({profile,handleSubmit,error}) => {
    return (
        <form className={classes.descriptionEdit} onSubmit={handleSubmit}>
        <div><span>Profile information editor</span><button>save</button></div>
        {error && <div className={style.formError}>
                {error}
            </div>}
            <div>
                <b>Full name</b>: {CreateField('fullName','Full Name', Input )}
            </div>
            <div>
                <b>Looking for a job</b>: {CreateField('lookingForAJob', '', Input, [], {type: "checkbox"})}
            </div>
            <div>
                <b>Mt professional skills</b>: {CreateField('lookingForAJobDescription','Some my skills', Textarea)}
            </div>
            <div>
                <b>About me</b>: {CreateField('aboutMe','About me', Textarea)}
            </div>
            <div>
                {Object.keys(profile.contacts).map(key => <div key={key}>{key}:{CreateField(`contacts.${key}`, `${key}`, Input )}</div>)}
            </div>
        </form>
    )
}

const ProfileInfoDescriptionReduxForm = reduxForm({form:'edit-profile'})(ProfileInfoDescriptionForm)

export default ProfileInfoDescriptionReduxForm