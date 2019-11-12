import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog} activeNameClass={classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    let dialogsData = [
        { id: 1, name: 'Efim' },
        { id: 2, name: 'Dima' },
        { id: 3, name: 'Timur' },
    ]

    let messagesData = [
        { id: 1, message: 'Hi!' },
        { id: 2, message: 'Hi!, how are you?' },
        { id: 3, message: 'I\'m YO' }
    ]

    let dialogElements =
        dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)

    let messageElements =
        messagesData.map(m => <Message message={m.message} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs