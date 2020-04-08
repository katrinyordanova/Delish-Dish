import axios from 'axios';
const baseUrl = 'user/';

export default {
    register(username, password) {
        return axios.post(baseUrl + 'register', {
            username,
            password
        });
    },
    login(username, password) {
        return axios.post(baseUrl + 'login', {
            username,
            password
        });
    },
    logout() {
        return axios.post(baseUrl + 'logout');
    }
}