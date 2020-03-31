import Vue from 'vue';
import App from './App.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { VBHoverPlugin } from 'bootstrap-vue';
import router from './plugins/router';
import axios from 'axios';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VBHoverPlugin)

const API_URL = 'http://localhost:8888/api';

axios.interceptors.request.use(function (config) {
  config.url = `${API_URL}/${config.url}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
