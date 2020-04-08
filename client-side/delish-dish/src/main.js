import Vue from 'vue';
import App from './App.vue';
import router from './plugins/router';
import axios from 'axios';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import { VBHoverPlugin } from 'bootstrap-vue';
import globalStore from '@/store/global';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMinusCircle);
library.add(faPlusCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VBHoverPlugin);
const API_URL = 'http://localhost:8888/api';

axios.interceptors.request.use(function (config) {
  config.url = `${API_URL}/${config.url}`;
  return config;
}, function (error) {
  return Promise.reject(error);
});

router.beforeEach((to, from, next) => {
  const { authenticated, unauthenticated } = to.meta;
  const isLogged = globalStore.isLogged;
  console.log('authenticated: ' + authenticated);
  console.log('unauthenticated: ' + unauthenticated);
  console.log('isLogged: ' + isLogged);
  console.log('-----------------------------------------');
  if (
      (!authenticated && !unauthenticated) ||
      (authenticated && isLogged) ||
      (unauthenticated && !isLogged)
  ) { next(); return }

  next(authenticated ? '/' : '/home');
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
