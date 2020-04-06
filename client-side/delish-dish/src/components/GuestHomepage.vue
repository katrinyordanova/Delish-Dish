<template>
    <div class="main">
        <h1>Hello and welcome to Delish Dish!</h1>
        <h3>Do you want to learn how to cook? Or perhaps want to try something new? Well then, join our community and let's cook together.</h3>
        <div class="d-flex justify-content-center">
            <div class="register">
                <h4>Don't have a profile?</h4><router-link to="register" class="register-button">Register</router-link>
            </div>
            <div class="login">
                <h4>Otherwise:</h4><router-link to="login" class="login-button">Sign in</router-link>
            </div>
        </div>
    </div> 
</template>

<script>
export default {
    name: 'app-guest-homepage'
}
</script>

<style scoped>
div {
    width: 40em;
    height: 28em;
    margin: 5em auto 0 auto;
    color: rgb(255, 255, 255);
}

.main {
    border: 10px solid rgb(203, 238, 78);
    border-radius: 1em;
    padding: 0.7em;
    background:rgb(203, 238, 78);
    text-shadow: 0px 0px 3px rgba(136, 119, 119, 0.3);
}

h1, h3, h4 {
    cursor: default;
}

h1 {
    margin-left: 2.5em;
    width: 10em;
    margin-bottom: 1em;
    border-bottom: 3px solid rgb(230, 107, 76);
}

h3 + div {
    width: 30em;
    margin-top: 5em;
}

h4 {
    margin-bottom: 1em;
}

.register,
.login {
    margin: -1em;
    font-size: 18px;
}

.register-button,
.login-button {
    background: rgb(230, 107, 76);
    color: rgb(255, 255, 255);
    padding: 1em;
    border-radius: 5px;
    text-decoration: none;
    text-shadow: none;
}
</style>