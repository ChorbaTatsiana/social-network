import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7a5581ff-ee33-4869-a00c-f3166540c3e1'
    }
})
export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance
        .get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
};

export const getProfile = (userId) => {
    console.warn('obsolete method. pleaseprofileAPI object');
    return profileAPI.getProfile(userId);
}

export const profileAPI = {
    getProfile(userId) {
        return instance
            .get(`profile/${userId}`)
            .then(response => response.data);
    },
    getStatus(userId) {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
}
export const getFollow = (id) => {
    return instance
        .delete(`follow/${id}`)
        .then(response => response.data);
}

export const getUnFollow = (id) => {
    return instance
        .post(`follow/${id}`)
        .then(response => response.data);
};
export const getAuthMe = () => {
    return instance
        .get(`auth/me`)

};

export const authAPI = {

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
