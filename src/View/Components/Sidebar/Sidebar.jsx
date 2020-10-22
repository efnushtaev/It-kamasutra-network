import React from 'react';
import classes from './Sidebar.module.scss';
import {NavLink} from 'react-router-dom';

const Sidebar = () => {
    return (
        <nav className={classes.navigation}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/users'>Users</NavLink>
            </div>
        </nav>
    )
}

export default Sidebar;