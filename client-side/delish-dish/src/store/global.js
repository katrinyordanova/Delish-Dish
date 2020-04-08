import Vue from 'vue';

const global = new Vue({
    data: {
        user: null
    },
    methods: {
        setUser(user) { this.user = user; },
        clearUser() { this.user = null},
    },
    computed: {
        isLogged() { return !!this.user; },
    }
});

export default global;