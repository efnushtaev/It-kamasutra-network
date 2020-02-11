import { connect } from "react-redux";
import Users from "./Users";
import { followCreation, unfollowCreation, setUsersCreation, setCurrentPageCreation, setTotalUserCountAC } from "../../../../redux/reducer/usersPage-reducer";

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
        setTotalUserCount: (totalUserCount) => {
            dispatch(setTotalUserCountAC(totalUserCount))
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;