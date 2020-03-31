<template>
    <div class="register">
        <h1>Registration</h1>
        <form @submit.prevent="registerHandler(username, password)">
            <b-form-group>
                <b-form inline>
                    <label for="username">Username:</label>
                    <b-input v-model="username" class="mb-2 mr-sm-2 mb-sm-0" id="username" />
                </b-form>
                <b-form inline>
                    <label for="password">Password:</label>
                    <b-input v-model="password" class="mb-2 mr-sm-2 mb-sm-0" id="password" type="password" />
                </b-form>
                <b-form inline>
                    <label for="confirmPassword">Confirm Password:</label>
                    <b-input v-model="confirmPassword" class="mb-2 mr-sm-2 mb-sm-0" id="confirmPassword" type="password" />
                </b-form>
            </b-form-group>
            <div class="buttons d-flex justify-content-center">
                <button>Regiter</button>
                <router-link to="login">Login</router-link>
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
            password: '',
            confirmPassword: ''
        }
    },
    methods: {
        registerHandler(username, password) {
            axios.post('user/register', {
                username,
                password
            }).then(() => {
                return this.$router.push('/home');
            }).catch(() => {
                alert('Username already exists!')
            })
        }
    }
}
</script>

<style scoped>
.register, button, a {
    color: rgb(255, 255, 255);
}

label, a {
    cursor: pointer;
}

.register {
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