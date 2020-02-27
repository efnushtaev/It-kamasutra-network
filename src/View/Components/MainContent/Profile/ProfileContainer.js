import React from 'react';
import { connect } from 'react-redux';
import { setUserProfile } from './../../../../redux/reducer/profilePage-reducer';
import Profile from './Profile';
import { profileAPI } from './../../../../api/api';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) { userId = '2' };
        profileAPI.setProfile(userId).then(response => {
            this.props.setUserProfile(response)
        });
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

export default connect(mapStateToProps, { setUserProfile })(withRouter(ProfileContainer))