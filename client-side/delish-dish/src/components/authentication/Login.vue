<template>
    <div class="login">
        <h1>Login</h1>
        <form @submit.prevent="submitHandler">
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
            <div class="buttons">
                <b-button href="#">Login</b-button>
                <b-button href="#">Regiter</b-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'app-register',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        submitHandler() {
        }
    }
}
</script>

<style scoped>
.login {
    width: 35em;
    margin: 8em auto;
}

h1, label {
    color: rgb(255, 255, 255);
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

a {
    font-size: 22.8px;
}

a:nth-child(1) {
    margin-right: 0.75em;
    background-color: rgb(255, 123, 0);
}

.buttons {
    margin-top: 3em
}
</style>