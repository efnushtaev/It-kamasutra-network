import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog + ' ' + classes.active}>
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
    ]

    let messageData = [
        { id: 1, message: 'Hi!'},
        { id: 2, message: 'Hi!, how are you?'},
        { id: 3, message: 'I\'m YO'}
    ]
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name={dialogData[0].name} id={dialogData[0].id}/>
                <DialogItem name={dialogData[1].name} id={dialogData[1].id}/>
            </div>
            <div className={classes.messages}>
                <Message message={messageData[0].message} />
                <Message message={messageData[1].message} />
                <Message message={messageData[2].message} />
            </div>
        </div>
    )
}

export default Dialogs