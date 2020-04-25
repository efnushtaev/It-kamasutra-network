import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, getUsersThunk } from "../../../../redux/reducer/usersPage-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../../Common/Preloader";
import { getUsers, getPagesSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingProgress } from "../../../../redux/reducer/users-selectors";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
       this.props.getUsersThunk(this.props.currentPage, this.props.pagesSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk(pageNumber, this.props.pagesSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                users={this.props.users}
                pagesSize={this.props.pagesSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow} 
                followingProgress={this.props.followingProgress}/>
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pagesSize: getPagesSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state)
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunk
})(UsersAPIComponent)

export default UsersContainer;