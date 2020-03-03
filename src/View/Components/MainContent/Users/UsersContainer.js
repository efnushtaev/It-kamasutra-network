import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, getUsersThunk } from "../../../../redux/reducer/usersPage-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../../Common/Preloader";

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
        users: state.usersPage.users,
        pagesSize: state.usersPage.pagesSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress
    }
}

const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    getUsersThunk
})(UsersAPIComponent)

export default UsersContainer;