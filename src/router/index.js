import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NoFound from '@/pages/404/404'
const home = r => require.ensure([], () => r(require('../pages/home/home')), 'home')
const mall = r => require.ensure([], () => r(require('../pages/mall/mall')), 'mall')
const profile = r => require.ensure([], () => r(require('../pages/profile/profile')), 'profile')
const table = r => require.ensure([], () => r(require('../pages/table/vueTable')), 'table')
const footerBar = r => require.ensure([], () => r(require('../pages/footer/footerBar')), 'footerBar')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path : '/home',
      name : 'home',
      component : home
    },
    {
      path : '/mall/:id',
      name : 'mall',
      component : mall
    },
    {
      path : '/table/:id',
      name : 'table',
      component : table
    },
    {
      path : '/footer/footerBar',
      name : 'footerBar',
      component : footerBar
    },
    {
      path : '/profile/profile',
      name : 'profile',
      component : profile
    },
    {
      path : '*',
      name : '404',
      component : NoFound
    }
  ]
})
