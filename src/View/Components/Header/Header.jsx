import React from 'react';
import styles from './Header.module.scss';
import logo from "./../../Images/logo.png";
import { NavLink } from 'react-router-dom';

let Header = (props) => {
  const {login, logout, isAuth, avatar} = props
  return (
    <header className={styles.header}>
      <img className={styles.logo} alt='logo' src={logo} />
      <div className={styles.login}>
      {isAuth 
        ? <div>
            <span className={styles.login__login}>{login}</span>
            {avatar == false 
                ? <img src={'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'}/> 
                : <img src={avatar}/>}
                <span className={styles.login__button} onClick={logout}>logout</span></div> 
        : <NavLink to="/login">Login</NavLink> }
      </div>
    </header>
  )
}

export default Header;