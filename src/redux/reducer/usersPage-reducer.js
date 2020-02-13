const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [],
    pagesSize: 50,
    totalUsersCount: 0,
    currentPage: 1, 
    isFetching: true

}

const userPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map((u) => {
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
            users:[...action.users]
            
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
    }
    default:
        return state;
    }
}

export const followCreation = (user) => ({
    type: FOLLOW,
    id: user
});
export const unfollowCreation = (user) => ({
    type: UNFOLLOW,
    id: user
});
export const setUsersCreation = (users) => ({
    type: SET_USERS,
    users: users
})
export const setCurrentPageCreation = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
})
export const setTotalUsersCountAC = (totalUsersCount) => ({
    type: SET_TOTAL_USER_COUNT,
    totalUsersCount: totalUsersCount
})
export const setToggeleIsFetchingAC = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
})

export default userPageReducer;