import React, {useState} from 'react';
import classes from './ProfileInfo.module.css';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    let activateEditMode = () => {
        setEditMode(true)
    }
    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }
    let onUpdateStatus = (e) => {
        setStatus(e.currentTarget.value)
        console.log(status)
    }

        return (
            <div>
                {!editMode
                ? <div>
                    <span onClick={()=> activateEditMode()}>{props.status === '' ? '-----' : props.status}</span>
                </div>
                : <div><input onChange={onUpdateStatus} autoFocus={true} onBlur={()=>{deactivateEditMode()}}value={status} /></div>
                }
            </div>
        )
    
}

export default ProfileStatusWithHooks;