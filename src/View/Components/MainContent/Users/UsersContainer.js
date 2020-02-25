import { connect } from "react-redux";
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, setToggeleIsFetching } from "../../../../redux/reducer/usersPage-reducer";
import React from 'react';
import Users from './Users';
import Preloader from "../../Common/Preloader";
import { usersAPI } from "../../../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.setToggeleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pagesSize)
            .then(response => {
            this.props.setToggeleIsFetching(false);
            this.props.setUsers(response.items);
            this.props.setTotalUsersCount(response.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setToggeleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pagesSize)
            .then(response => {
            this.props.setUsers(response.items);
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


const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setToggeleIsFetching
})(UsersAPIComponent)

export default UsersContainer;