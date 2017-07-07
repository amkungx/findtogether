import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/layouts/Home'
import Test from '@/components/Test'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
