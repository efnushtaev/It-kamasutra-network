import React from 'react';
import classes from './Header.module.scss';
import logo from "./../../Images/logo.png";
import { NavLink } from 'react-router-dom';

let Header = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} alt='' src={logo} />
      <div className={classes.login}>
        <NavLink to="/login">{props.isAuth ? props.login : 'Login'}</NavLink>
      </div>
    </header>
  )
}

export default Header;