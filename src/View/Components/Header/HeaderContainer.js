import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { logout } from './../../../redux/reducer/auth-reducer';
import { compose } from 'redux';

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => {
    let avatar = ''
    state.profilePage.profile == null || state.profilePage.profile.photos.small == null
        ? avatar = 'https://windows10free.ru/uploads/posts/2017-04/1493287748_1487679899_icon-user-640x640.png'
        : avatar = state.profilePage.profile.photos.small;
        return({
            avatar,
            isAuth: state.auth.isAuth,
            login: state.auth.login
        })
}

export default connect(mapStateToProps, { logout })(HeaderContainer);