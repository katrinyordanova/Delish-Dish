<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="loginHandler(username, password)">
            <b-form-group>
                <b-form inline>
                    <label for="username">Username:</label>
                    <b-input v-model="username"
                        @blur="$v.username.$touch"
                        class="mb-2 mr-sm-2 mb-sm-0" id="username" />
                </b-form>
                 <template v-if="$v.username.$error">
                    <div class="validation" v-if="!$v.username.required">Username is required</div>
                </template>
                <b-form inline>
                    <label for="password">Password:</label>
                    <b-input v-model="password"
                        @blur="$v.password.$touch"
                        class="mb-2 mr-sm-2 mb-sm-0" id="password" type="password" />
                </b-form>
                <template v-if="$v.password.$error">
                    <div class="validation" v-if="!$v.password.required">Password is required</div>
                </template>
            </b-form-group>
            <template v-if="invalidUser">
                <div class="validation">Username or password is incorrect</div>
            </template>
            <div class="buttons d-flex justify-content-center">
                <button :disabled="$v.$invalid">Login</button>
                <router-link to="register">Regiter</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';

export default {
    name: 'app-register',
    data() {
        return {
            invalidUser: false,
            username: '',
            password: ''
        }
    },
    mixins: [validationMixin],
    validations: {
        username: {
            required
        },
        password: {
            required
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
                this.invalidUser = true;
            });
        }
    }
}
</script>

<style scoped>
.login, button, a {
    color: rgb(255, 255, 255);
}

.login {
    width: 32em;
    margin: 8em auto;
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
    margin-right: -1em;
    cursor: pointer;
}

form.form-inline {
    margin-bottom: 1.3em;
}

.validation {
    width: 18em;
    background-color: rgb(226, 48, 48);
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.85);
    border-radius: 5px;
    font-size: 20px;
    color: rgb(255, 255, 255);
    margin: 0 auto 1em auto;
}

.buttons {
    width: 37em;
    margin: 0 auto 0 -1.3em;
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

button:disabled {
    cursor: not-allowed;
}

a:hover {
    text-decoration: none;
}
</style>