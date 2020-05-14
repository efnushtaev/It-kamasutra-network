import {
    usersAPI
} from "../../api/api";
import { updateObjectInArray } from "../../utils/object-helper";

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
                users: updateObjectInArray(state.users, action.user, "id", {followed: true})
            }
        };
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.user, "id", {followed: false})
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

export const getUsersThunk = (page, pagesSize) => {
    return (dispatch) => {
        dispatch(setToggeleIsFetching(true));
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page, pagesSize)
        .then(response => {
            dispatch(setToggeleIsFetching(false));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
        });
    }
}

const followUnllowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUnllowFlow(dispatch, userId, usersAPI.followUser.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
    followUnllowFlow(dispatch, userId, usersAPI.unfollowUser.bind(usersAPI), unfollowSuccess)
}

export default userPageReducer;