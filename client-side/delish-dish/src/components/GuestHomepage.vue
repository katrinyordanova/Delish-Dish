<template>
    <div class="main">
        <h1>Hello and welcome to Delish Dish!</h1>
        <h3>Do you want to learn how to cook? Or perhaps want to try something new? Well then, join our community and let's cook together.</h3>
        <div class="d-flex justify-content-center">
            <div class="register">
                <h4>Don't have a profile?</h4><b-link class="register-button" href="#">Register</b-link>
            </div>
            <div class="login">
                <h4>Otherwise:</h4><b-link href="#" class="login-button">Sign in</b-link>
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
    margin: 6em auto;
}

.main {
    color: rgb(255, 255, 255);
    text-shadow: 0px 0px 10px rgb(0, 0, 0);
}

h1, h3, h4 {
    cursor: default;
}

h1 {
    margin-bottom: 1em;
    border-bottom: 3px solid rgb(255, 123, 0);
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
    margin: 0;
    font-size: 18px;
}

.register-button,
.login-button {
    background: rgb(255, 123, 0);
    color: rgb(255, 255, 255);
    padding: 1em;
    border-radius: 5px;
    margin-top: 0.9em;
    text-decoration: none;
    text-shadow: none;
}
</style>