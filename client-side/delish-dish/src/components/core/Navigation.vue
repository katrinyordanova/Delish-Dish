<template>
    <div class="navbar navbar-expand-sm d-flex justify-content-center">
        <img src="../../assets/chef.png" class="chef" alt="chef">
        <img src="../../assets/brand-logo.png" class="float-left" alt="brand-logo">
        <p class="brand">Delish Dish</p>
        <b-nav pills class="nav-links">
            <router-link to="/" class="home-button">GuestHome</router-link>
            <router-link to="/home" class="home-button">UserHome</router-link>
            <router-link to="/home/add-recipe" class="home-button">Add recipe</router-link>
            <button @click="logout">Logout</button>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: 'app-navigation',
    methods: {
        logout() {
            return this.$router.push('/');
        }
    }
}
</script>

<style scoped>
div, .brand {
    color: rgb(255, 255, 255);
}

.chef, .nav-links {
    position: absolute;
}

div {
    background: rgb(255, 123, 0);
    box-shadow: 0px 0px 5px 0px #5F5F5F;
    padding: 0
}

img {
    width: 4.5em;
    margin-top: -0.3em
}

.chef {
    width: 2.8em;
    left: 1.8em;
    padding-top: 0.6em
}

.brand {
    font-family: 'Homemade Apple', serif;
    font-size: 2.08em;
    padding-top: 0.2em;
    margin-bottom: 0;
}

.brand:hover, p {
    cursor: default;
    text-decoration: underline;
}

.nav-links {
    right: 1em;
    margin-right: 0.5em;
    font-size: 17.9px;
}

ul > a,
button {
    color: rgb(255, 123, 0);
    background: rgb(255, 255, 255);
    border: 1px solid rgb(255, 123, 0);
    border-radius: 6px;
    padding: 0.5em 0.4em;
}

ul > a:hover,
button:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(255, 123, 0);
    border: 1px solid rgb(255, 255, 255);
}

a {
    margin-right: 0.3em;
}

a:hover {
    text-decoration: none;
}

button:focus {
    outline: 0;
}
</style>