import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '@/router'
import VueResource from 'vue-resource'
import store from "./store";

Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

