import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY,
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
    },

    unfollowUser (id = 2) {
        return instance.delete(`follow/${id}`)
        .then(response => response.data);
    },

    followUser (id = 2) {
        return instance.post(`follow/${id}`)
        .then(response => response.data);
    }
}