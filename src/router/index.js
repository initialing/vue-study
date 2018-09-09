import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
