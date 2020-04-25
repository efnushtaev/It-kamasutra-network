import React from 'react';
import { connect } from 'react-redux';
import { getProfileThunk, getStatus, updateStatus } from './../../../../redux/reducer/profilePage-reducer';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = this.props.userId 
            // if(!userId) {this.props.history.push('/login')}
        };
        this.props.getProfileThunk(userId);
        this.props.getStatus(userId);
    }
    render() {
        return <Profile {...this.props} profile={this.props.profile}
                                        status={this.props.status}
                                        updateStatus={this.props.updateStatus}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorisedUserId: state.userId 
})

export default compose(connect(mapStateToProps, { getProfileThunk, getStatus, updateStatus }),withRouter, WithAuthRedirect)(ProfileContainer)
  