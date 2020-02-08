import React from 'react';
import classes from './Sidebar.module.css';
import {NavLink} from 'react-router-dom';

let Sidebar = () => {
    return (
        <nav className={classes.navigation}>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/profile'>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/dialogs'>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='./news'>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/music'>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink activeClassName={classes.active} to='/users'>Users</NavLink>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    )
}

export default Sidebar;