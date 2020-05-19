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
    setProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            });
    },
    setStatus(userId) {
        return instance.get(`profile/status/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status})
            .then(response => {
                return response
            })
    },
    savePhoto(photoFile) {
        let formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData,{
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then(response => {
                return response
            })
    }
}

export const headerAPI = {
    me() {
        return instance.get(`auth/me`)
            .then(response => {
                return response.data;
            });
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
            .then(response => {
                return response.data;
            });
    },
    logout() {
        return instance.delete(`auth/login`)
            .then(response => {
                return response.data;
            });
    }
}