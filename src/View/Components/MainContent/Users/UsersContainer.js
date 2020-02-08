import { connect } from "react-redux";
import Users from "./Users";
import { followCreation, unfollowCreation, setUsersCreation } from "../../../../redux/reducer/usersPage-reducer";

debugger;
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;