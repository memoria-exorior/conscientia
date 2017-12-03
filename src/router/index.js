import Vue from 'vue'
import Router from 'vue-router'
import FactList from '@/components/FactList'

Vue.use(Router)

Vue.mixin({
  methods: {
    uuid
  }
})

export default new Router({
  routes: [
    {
      path: '/',
      name: 'FactList',
      component: FactList
    }
  ]
})

function uuid () {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0
    var v = c === 'x' ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  })
}
