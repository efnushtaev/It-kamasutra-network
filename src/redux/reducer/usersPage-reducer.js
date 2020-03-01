import {
    usersAPI
} from "../../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE_IS_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pagesSize: 50,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: []

}

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
                    debugger;
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: true
                        };
                    }
                    return u
                })
            }
        };
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {
                            ...u,
                            followed: false
                        };
                    }
                    return u
                })
            }
        };
    case SET_USERS: {
        return {
            ...state,
            users: [...action.users]

        }
    };
    case SET_CURRENT_PAGE: {
        return {
            ...state,
            currentPage: action.currentPage
        }
    };
    case SET_TOTAL_USER_COUNT: {
        return {
            ...state,
            totalUsersCount: action.totalUsersCount
        }
    };
    case TOGGLE_IS_FETCHING: {
        return {
            ...state,
            isFetching: action.isFetching
        }
    };
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
        return {
            ...state,
            followingProgress: action.isFetching ?
                [...state.followingProgress, action.userid] :
                [...state.followingProgress.filter(e => e != action.userid)]

        }
    }
    default:
        return state;
    }
}

export const followSuccess = (user) => ({
    type: FOLLOW,
    id: user
});
export const unfollowSuccess = (user) => ({
    type: UNFOLLOW,
    id: user
});
export const setUsers = (users) => ({
    type: SET_USERS,
    users: users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})
export const setTotalUsersCount = (totalUsersCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount: totalUsersCount
})
export const setToggeleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})
export const toggleFollowingProgress = (isFetching, userid) => ({
    
    type: TOOGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userid
})

export const getUsersThunk = (currentPage, pagesSize) => {
    return (dispatch) => {
        dispatch(setToggeleIsFetching(true));
        usersAPI.getUsers(currentPage, pagesSize)
            .then(response => {
                dispatch(setToggeleIsFetching(false));
                dispatch(setUsers(response.items));
                dispatch(setTotalUsersCount(response.totalCount));
            });
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        debugger
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.followUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollowUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export default userPageReducer;