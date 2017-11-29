import Vue from 'vue'
import Router from 'vue-router'
import FactList from '@/components/FactList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FactList',
      component: FactList
    }
  ]
})
