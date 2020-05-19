import React from 'react';
import { connect } from 'react-redux';
import { getProfileThunk, getStatus, updateStatus, savePhoto } from './../../../../redux/reducer/profilePage-reducer';
import Profile from './Profile';
import { withRouter, Redirect } from 'react-router-dom';
import { WithAuthRedirect } from '../../../hoc/AuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {
    profileRefresh(){
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorisedUserId
            // userId = 6063 
            if(!userId) {this.props.history.push('/login')}
        };
        this.props.getProfileThunk(userId);
        this.props.getStatus(userId);   
    }

    componentDidMount() { this.profileRefresh()}

    componentDidUpdate(prevProps, prevState) {
        this.props.match.params.userId != prevProps.match.params.userId && this.profileRefresh()
    }

    render() {
        return <Profile 
                    {...this.props} 
                    profile={this.props.profile}
                    status={this.props.status}
                    updateStatus={this.props.updateStatus}
                    isOwner={!this.props.match.params.userId}/>
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status: state.profilePage.status,
    authorisedUserId: state.auth.userId 
})

export default compose(connect(mapStateToProps, { getProfileThunk, getStatus, updateStatus, savePhoto }),withRouter, WithAuthRedirect)(ProfileContainer)
  