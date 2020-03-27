import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { VBHoverPlugin } from 'bootstrap-vue'
import router from './plugins/router'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VBHoverPlugin)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
