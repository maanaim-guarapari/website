import Vue from 'vue'

import App from './App.vue'

import store from './store'
import router from './router'

import './plugins'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
