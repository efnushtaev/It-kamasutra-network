import React, {useState, useEffect} from 'react';
import styles from './ProfileInfo.module.scss';

const ProfileStatusWithHooks = (props) => {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status] )

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
                    ? <div className={styles.status}><span onClick={()=> activateEditMode()}>{props.status === '' ? '-----' : props.status}</span></div>
                    : <div><input onChange={onUpdateStatus} autoFocus={true} onBlur={()=>{deactivateEditMode()}}value={status} /></div>
                }
            </div>
        )
    
}

export default ProfileStatusWithHooks;