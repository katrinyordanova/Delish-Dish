<template>
    <div>
        <img src="../assets/404-page.jpeg" alt="not-found-page">
        <div class="home-button">
            <router-link to="/">Go home</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app-not-found-page'
}
</script>

<style scoped>
img {
    width: 28em;
    height: 20em;
    margin-top: 7em;
    border-radius: 15px;
    vertical-align: baseline;
}

h1 {
    margin: 0.5em auto;
    color: rgb(255, 255, 255);
    text-shadow: 0px 0px 10px rgb(0, 0, 0);
}

.home-button {
    margin-top: 2.2em;
}

a {
    border: 1px solid rgb(203, 238, 78);
    border-radius: 5px;
    background-color: rgb(203, 238, 78);
    padding: 0.7em;
    font-size: 20px;
    align-items: center;
}

li, a, a:hover {
    color: rgb(255, 255, 255); 
    text-decoration: none;
}
</style>