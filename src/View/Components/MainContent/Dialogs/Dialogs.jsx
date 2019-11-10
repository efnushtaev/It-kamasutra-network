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
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <DialogItem name="Efim" id="1" />
                <DialogItem name="Dima" id="2" />
                <DialogItem name="Timur" id="3" />
                <DialogItem name="Casha" id="4" />
                <DialogItem name="Jenya" id="5" />

            </div>
            <div className={classes.messages}>
                <Message message="Hi!" />
                <Message message="Hi!, how are you?" />
                <Message message="I'm YO" />
            </div>
        </div>
    )
}

export default Dialogs