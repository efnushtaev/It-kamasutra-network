import React from 'react';
import classes from './Header.module.scss';
import logo from "./../../Images/logo.png";
import { NavLink } from 'react-router-dom';

let Header = (props) => {
  return (
    <header className={classes.header}>
      <img className={classes.logo} alt='logo' src={logo} />
      <div className={classes.login}>
      {props.isAuth ? <span>{props.login}</span> : <NavLink to="/login">Login</NavLink>}
      </div>
    </header>
  )
}

export default Header;