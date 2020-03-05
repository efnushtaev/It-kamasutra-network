import React from 'react';
import { connect } from 'react-redux';
import { getProfileThunk } from './../../../../redux/reducer/profilePage-reducer';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = '2' };
        this.props.getProfileThunk(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

export default compose(connect(mapStateToProps, { getProfileThunk }),withRouter, WithAuthRedirect)(ProfileContainer)
  