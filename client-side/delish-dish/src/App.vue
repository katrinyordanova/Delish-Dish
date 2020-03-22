<template>
  <div id="app">
    <app-navigation />
  </div>
</template>

<script>
import AppNavigation from './components/core/Navigation.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style>
#app {
  width: 100vw;
  height: 100vh;
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url(./assets/site-background.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
</style>
