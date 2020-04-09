import Vue from 'vue';

const global = new Vue({
    data: {
        user: null
    },
    methods: {
        setUser(user) { 
            this.user = user; 
            return localStorage.setItem('user', user);
        },
        clearUser() { return this.user = null; },
    },
    computed: {
        isLogged() {
            const user = localStorage.getItem('user');
                if(user) {
                    return user;
                }
                return null;
        }
        // isLogged() { return !!this.user; },
    }
});

export default global;