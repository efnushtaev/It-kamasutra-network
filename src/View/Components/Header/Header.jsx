import React from 'react';
import classes from './Header.module.css';
import logo from "./../../Images/logo.png";

let Header = () => {
    return (
        <header className={classes.header}>
        <img className={classes.logo} alt='' src={logo}/>
      </header>
    )
}

export default Header;