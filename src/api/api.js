import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '906deb40-189c-468a-9e06-c52268474800',
    }
  });

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
    },
    authMe() {
        return instance.get(`auth/me`).then(response => response.data);
    },
    getProfile(id) {
        console.warn('Obsolete method. Please use profileApi.getProfile()');
        return profileAPI.getProfile(id);
    },
    follow(id) {
        return  instance.post(`follow/${id}`).then(response => response.data);
    },
    unfollow(id) {
        return  instance.delete(`follow/${id}`).then(response => response.data);
    }
};

export const profileAPI = {
    getProfile(id) {
        return instance.get(`profile/${id}`).then(response => {
            return response.data;
        });
    },
    getStatus(id) {
        return instance.get(`profile/status/${id}`).then(response => response.data);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    }
};