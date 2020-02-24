import React from 'react';
import classes from './Header.module.scss';
import logo from "./../../Images/logo.png";
import { NavLink } from 'react-router-dom';
import Header from './Header'
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setAuthUsersData } from './../../../redux/reducer/auth-reducer';


class HeaderContainer extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        }).then(response => {

            if(response.data.resultCode === 0) {
                let {id, email, login} = response.data.data;
                this.props.setAuthUsersData(id, email, login);
            }
         
        });
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps=(state)=>({

})

export default connect(mapStateToProps,{setAuthUsersData})(HeaderContainer);