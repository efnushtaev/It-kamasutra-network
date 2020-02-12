import { connect } from "react-redux";
import { followCreation, unfollowCreation, setUsersCreation, setCurrentPageCreation, setTotalUsersCountAC } from "../../../../redux/reducer/usersPage-reducer";
import * as axios from 'axios';
import React from 'react';
import Users from './Users';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        console.log("mount")
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pagesSize}`).then(response => {
            debugger;
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pagesSize}`).then(response => {
            this.props.setUsers(response.data.items)
        });
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
            users={this.props.users}
            pagesSize={this.props.pagesSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow} />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer;