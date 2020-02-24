import React from 'react';
import { connect } from 'react-redux';
import {setUserProfile} from './../../../../redux/reducer/profilePage-reducer';
import Profile from './Profile';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount(){

        // this.props.setToggeleIsFetching(true);
        let userId = this.props.match.params.userId;
        if(!userId){userId = '2'}
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(response => {
this.props.setUserProfile(response.data)
        });
    }
    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
})

const WithUrlDataProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer)