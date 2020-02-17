import React from 'react';
import { connect } from 'react-redux';
import {setUserProfile} from './../../../../redux/reducer/profilePage-reducer';
import Profile from './Profile';
import Axios from 'axios';

class ProfileContainer extends React.Component {
    componentDidMount(){
        // this.props.setToggeleIsFetching(true);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
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

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)