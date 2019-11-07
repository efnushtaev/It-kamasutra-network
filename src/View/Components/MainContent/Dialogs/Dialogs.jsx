import React from 'react';
import classes from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                <div className={classes.dialog + ' ' + classes.active}>Efim</div>
                <div className={classes.dialog}>Dima</div>
                <div className={classes.dialog}>Timur</div>
                <div className={classes.dialog}>Casha</div>
                <div className={classes.dialog}>Jenya</div>
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