import React from 'react';
import Header from './Header'
import { connect } from 'react-redux';
import { getAuthUsersData } from './../../../redux/reducer/auth-reducer';
import { compose } from 'redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUsersData()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUsersData })(HeaderContainer);