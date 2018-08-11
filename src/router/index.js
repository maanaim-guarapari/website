import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/features'
import Eventos from '@/features/events'
import AprendizJr from '@/features/aprendiz-jr'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/eventos',
      name: 'Eventos',
      component: Eventos
    },
    {
      path: '/aprendiz-jr',
      name: 'AprendizJr',
      component: AprendizJr
    }
  ]
})
