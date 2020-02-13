import { connect } from "react-redux";
import { followCreation, unfollowCreation, setUsersCreation, setCurrentPageCreation, setTotalUsersCountAC, setToggeleIsFetchingAC } from "../../../../redux/reducer/usersPage-reducer";
import * as axios from 'axios';
import React from 'react';
import Users from './Users';
import Preloader from "../../Common/Preloader";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setToggeleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`).then(response => {
            this.props.setToggeleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggeleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setToggeleIsFetching(false);
        });
    }

    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : null } 
        <Users totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            pagesSize={this.props.pagesSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow} />
            </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (user) => {
            dispatch(followCreation(user))
        },
        unfollow: (user) => {
            dispatch(unfollowCreation(user))
        },
        setUsers: (users) => {
            dispatch(setUsersCreation(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageCreation(currentPage))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
        setToggeleIsFetching: (isFetching) => {
            dispatch(setToggeleIsFetchingAC(isFetching))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;