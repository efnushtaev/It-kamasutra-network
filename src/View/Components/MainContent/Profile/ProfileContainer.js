import React from 'react';
import { connect } from 'react-redux';
import { getProfileThunk } from './../../../../redux/reducer/profilePage-reducer';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = '2' };
        this.props.getProfileThunk(userId);
    }
    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>;
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { getProfileThunk })(withRouter(ProfileContainer))