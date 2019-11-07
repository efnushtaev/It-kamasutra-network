import React from 'react';
import classes from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs/1">Efim</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/2">Dima</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/3">Timur</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/4">Casha</NavLink></div>
                <div className={classes.dialog}><NavLink to="/dialogs/5">Jenya</NavLink></div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi!</div>
                <div className={classes.message}>Hi!, how are you?</div>
                <div className={classes.message}>I'm YO</div>
            </div>
        </div>
    )
}

export default Dialogs