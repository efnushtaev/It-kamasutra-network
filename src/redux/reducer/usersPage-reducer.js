const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: []
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
            users:[...state.users, ...action.users]
            
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

export default userPageReducer;