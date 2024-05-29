import { protectedInstance } from './instance';

const serviceServices = {
    getAllServices: async () => {
        const token = localStorage.getItem('token');
        return protectedInstance.get('/services', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
};

export default serviceServices;
