import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Menu from '@/pages/menu/Menu' //引入菜单组件
import NoFound from '@/pages/404/404'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path : '/menu',
      name : 'Menu',
      component : Menu
    },
    {
      path : '*',
      name : '404',
      component : NoFound
    }
  ]
})
