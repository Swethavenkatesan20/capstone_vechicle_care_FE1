import { instance, protectedInstance } from './instance';

const userServices = {
    login: async (email, password) => {
        const response = await instance.post('/users/login', {
            email: email,
            password: password
        }, { withCredentials: true });
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);
        return response;
    },
    register: async (name, email, password, location) => {
        return instance.post('/users/register', {
            name: name,
            email: email,
            password: password,
            location: location
        });
    },
    logout: async () => {
        // Remove the token from localStorage
        localStorage.removeItem('token');
        return protectedInstance.get('/users/logout');
    },
    getCurrentUser: async () => {
        const token = localStorage.getItem('token');
        return protectedInstance.get('/users/profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    },
    getToken: () => {
        return localStorage.getItem('token');
    }
};

export default userServices;
