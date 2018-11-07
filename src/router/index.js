/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main/main.vue'
import Test from '@/pages/test/test.vue'
import Algo from '@/pages/algorithm/algo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },{
      path:'/test',
      name:'test',
      component:Test
    },{
      path:'/algo',
      name:'algo',
      component:Algo
    }
  ]
})
