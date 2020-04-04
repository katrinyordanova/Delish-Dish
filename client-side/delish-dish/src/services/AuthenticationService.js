import axios from 'axios';

export default {
    register(username, password) {
        return axios.post('user/register', {
            username,
            password
        });
    },
    login(username, password) {
        return axios.post('user/login', {
            username,
            password
        });
    }
}