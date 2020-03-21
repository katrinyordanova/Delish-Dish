<template>
    <div class="navbar navbar-expand-sm d-flex justify-content-center">
        <img src="../../assets/chef.png" class="cheff" alt="Responsive image">
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

.cheff, .nav-links {
    position: absolute;
}

div {
    background: rgb(255, 123, 0);
    box-shadow: 0px 0px 5px 0px #5F5F5F;
    padding: 0.3em
}

img {
    width: 4.5em;
    margin-top: -0.3em
}

.cheff {
    width: 3em;
    left: 2em;
    padding-top: 0.25em
}

.brand, .brand:hover {
font-style: oblique;
    font-family: 'Homemade Apple', serif;
    font-size: 2em;
    padding-top: 0.55em;
    margin-bottom: 0.02em;
}

.brand:hover {
    text-decoration: underline;
}

.nav-links {
    right: 1em;
    margin-right: 0.5em;
    font-size: 17.9px;
}

#app > div > ul > li > a {
    background: rgb(255, 255, 255);
    color: rgb(255, 123, 0);
}

#app > div > ul > li:nth-child(1) > a {
    margin-right: 0.7em;
}
</style>