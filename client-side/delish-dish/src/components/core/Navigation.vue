<template>
    <div class="navbar navbar-expand-sm d-flex justify-content-center">
        <img src="../../assets/chefff.png" class="cheff" alt="Responsive image">
        <img src="../../assets/brand-logo.png" class="float-left" alt="Responsive image">
        <b-navbar-brand href="#" class="brand">Delish Dish</b-navbar-brand>
        <b-nav pills class="nav-links">
            <b-nav-item active>Home</b-nav-item>
            <b-nav-item active>Logout</b-nav-item>
        </b-nav>
    </div>
</template>

<script>
export default {
    name: 'app-navigation'
}
</script>

<style scoped>
div, .brand {
    color: rgb(255, 255, 255);
}

div {
    background: rgb(255, 123, 0);
    box-shadow: 0px 0px 5px 0px #5F5F5F;
}

img {
    width: 4.5em;
}

.cheff {
    width: 3.5em;
    position: absolute;
    left:2em;
}

.brand {
    font-style: oblique;
    font-family: 'Homemade Apple', serif;
    font-size: 1.7em;
}

.brand:hover {
    margin-bottom: 0.02em;
    text-decoration: underline;
    font-size: 1.7em;
}

.nav-links {
    position: absolute; 
    right: 1em;
    margin-right: 0.5em;
}

.home-btn:hover {
    color: green
}

#app > div > ul > li > a {
    background: rgb(255, 255, 255);
    color: rgb(255, 123, 0);
}

#app > div > ul > li:nth-child(1) > a {
    margin-right: 0.7em;
}
</style>