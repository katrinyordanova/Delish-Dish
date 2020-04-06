<template>
  <div id="app">
    <app-navigation />
    <router-view></router-view>
  </div>
</template>

<script>
import AppNavigation from './components/core/Navigation.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

export default {
  name: 'App',
  components: {
    AppNavigation
  }
}
</script>

<style>
#app {
  text-align: center;
  font-family:  Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
