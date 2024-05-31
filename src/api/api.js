import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": process.env.REACT_APP_API_KEY,
    }
})

const authInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/auth/me',
    withCredentials: true,
})

export const usersAPI = {
    async getUsers (currentPage = 1, pageSize = 10) {
        const response = await instance.get(`users?page=${currentPage}&count=${pageSize}`);
        return response.data;
    },

    async unfollow (userId = 2) {
        return await instance.delete(`follow/${userId}`);
    },

    async follow (userId = 2) {
        return await instance.post(`follow/${userId}`);
    }
}

export const authAPI = {
    async authUserData () {
        return await authInstance.get();
    }
}