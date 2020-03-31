<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="loginHandler(username, password)">
            <b-form-group>
                <b-form inline>
                    <label for="username">Username:</label>
                    <b-input v-model="username" class="mb-2 mr-sm-2 mb-sm-0" id="username" />
                </b-form>
                <b-form inline>
                    <label for="password">Password:</label>
                    <b-input v-model="password" class="mb-2 mr-sm-2 mb-sm-0" id="password" type="password" />
                </b-form>
            </b-form-group>
            <div class="buttons d-flex justify-content-center">
                <button>Login</button>
                <router-link to="register">Regiter</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'app-register',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        loginHandler(username, password) {
            axios.post('user/login', {
                username,
                password
            }).then(() => {
                return this.$router.push('home');
            }).catch(() => {
                alert('Username or password not valid!')
            })
        }
    }
}
</script>

<style scoped>
.login, button, a {
    color: rgb(255, 255, 255);
}

.login {
    width: 35em;
    margin: 7em auto;
}

h1, label {
    text-shadow: 0px 0px 5px rgb(0, 0, 0);
}

h1 {
    margin-bottom: 1em;
}

label {
    width: 11em;
    font-size: 23px;
    cursor: pointer;
}

form.form-inline {
    margin-bottom: 1.3em;
}

.buttons {
    width: 37em;
    margin: 0 auto;
}

button,
button:hover,
a {
    border: 1px solid rgb(255, 123, 0);
    background-color: rgb(255, 123, 0);
    font-size: 21.3px;
    padding: 0.5em 0.4em;
    border-radius: 5px;
}

button {
    margin-right: 0.9em;
}

a:hover {
    text-decoration: none;
}
</style>