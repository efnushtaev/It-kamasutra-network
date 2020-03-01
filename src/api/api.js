import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "49f0f488-a7d4-45c3-bccf-218f44a4ebab"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pagesSize}`)
            .then(response => {
                return response.data;
            })
    },
    unfollowUser(usersid = 2) {
        return instance.delete(`follow/${usersid}`, {})
    },
    followUser(usersid = 2) {
        return instance.post(`follow/${usersid}`, {})
    }
}

export const profileAPI = {
    setProfile(userId = 2) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    }
}

export const headerAPI = {
    login() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    }
}