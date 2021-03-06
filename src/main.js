import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

axios.defaults.baseURL = 'https://dead69not.pythonanywhere.com/api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
