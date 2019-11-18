import React from 'react';
import classes from './friendItem.module.scss';
import {NavLink} from 'react-router-dom';

const FriendItem = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.ava} src={props.ava} alt="" />
            <span className={classes.name}><NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink></span>
        </div>
    )
}

export default FriendItem;