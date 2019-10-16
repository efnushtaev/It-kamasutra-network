import React from 'react';
import classes from './Navbar.module.css'

let Navbar = () => {
    return (
        <nav className={classes.navigation}>
            <div>
            <a>Profile</a>
            </div>
            <div>
            <a>Messages</a>
            </div>
            <div>
            <a>News</a>
            </div>
            <div>
            <a>Music</a>
            </div>
            <div>
            <a>Settings</a>
            </div>
        </nav>
    )
}

export default Navbar;