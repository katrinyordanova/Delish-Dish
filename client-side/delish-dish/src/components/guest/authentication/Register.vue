<template>
    <div class="register">
        <h1>Registration</h1>
        <form @submit.prevent="submitHandler(username, password)">
            <b-form-group>
                <b-form inline class="form-group">
                    <label for="username">Username:</label>
                    <b-input v-model="username"
                        @blur="$v.username.$touch"
                        class="mb-2 mr-sm-2 mb-sm-0" id="username" />
                </b-form>
                <template v-if="$v.username.$error">
                    <div class="validation" v-if="!$v.username.required">Username is required</div>
                    <div class="validation" v-else-if="!$v.username.$touched && !$v.username.minLength">Username must be at least 5 characters</div>
                </template>
                <b-form inline>
                    <label for="password">Password:</label>
                    <b-input v-model="password"
                        @blur="$v.password.$touch"
                        class="mb-2 mr-sm-2 mb-sm-0" id="password" type="password" />
                </b-form>
                <template v-if="$v.password.$error">
                    <div class="validation" v-if="!$v.password.required">Password is required</div>
                    <div class="validation" v-else-if="!$v.password.$touched && !$v.password.minLength">Password must be at least 6 characters</div>
                </template>
                <b-form inline>
                    <label for="confirmPassword">Confirm Password:</label>
                    <b-input v-model="confirmPassword"
                        @blur="$v.confirmPassword.$touch"
                        class="mb-2 mr-sm-2 mb-sm-0" id="confirmPassword" type="password" />
                </b-form>
                <template v-if="$v.confirmPassword.$error">
                    <div class="validation" v-if="!$v.confirmPassword.sameAs">Passwords don't macth</div>
                </template>
            </b-form-group>
            <template v-if="invalidUser">
                <div class="validation">Username is already taken</div>
            </template>
            <div class="buttons d-flex justify-content-center">
                <button :disabled="$v.$invalid">Regiter</button>
                <router-link to="login">Login</router-link>
            </div>
        </form>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService';
import { validationMixin } from 'vuelidate';
import { required, minLength } from 'vuelidate/lib/validators';
import globalStore from '@/store/global';

function sameAs(field) {
    return function(value) {
        return this[field] === value;
    }
}

export default {
    name: 'app-register',
    data() {
        return {
            invalidUser: false,
            username: '',
            password: '',
            confirmPassword: ''
        }
    },
    mixins: [validationMixin],
    validations: {
        username: {
            required,
            minLength: minLength(5)
        },
        password: {
            required,
            minLength: minLength(6)
        },
        confirmPassword: {
            sameAs: sameAs('password')
        }
    },
    methods: {
        submitHandler(username, password) {
            AuthenticationService.register(username, password)
            .then((res) => {
                globalStore.setUser(res.data._id);
                return this.$router.push('home');
            }).catch(() => {
                this.invalidUser = true;
            })
        }
    }
}
</script>

<style scoped>
@import '../../../shared/styles/guestForm.css';

.register {
    color: rgb(255, 255, 255);
    width: 35em;
    border: 10px solid rgb(203, 238, 78);
    border-radius: 1em;
    padding: 0.7em;
    background:rgb(203, 238, 78);
    text-shadow: 0px 0px 3px rgba(136, 119, 119, 0.3);
    margin: 7em auto;
}

button,
button:hover,
a {
    border: 1px solid rgb(230, 107, 76);
    background-color: rgb(230, 107, 76);
    font-size: 21.3px;
    padding: 0.5em 0.4em;
    border-radius: 5px;
}
</style>