import React from 'react';
import classes from './../dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={classes.dialog} activeNameClass={classes.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem