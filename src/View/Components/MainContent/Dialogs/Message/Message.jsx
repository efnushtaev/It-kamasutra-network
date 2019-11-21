import React from 'react';
// import classes from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';

import dialog from './../dialogs.module.scss';

const Message = (props) => {
    return (
        <div className={props.come === "in" ? dialog.messageIn : dialog.messageOut}>{props.message}</div>
    )
}

export default Message