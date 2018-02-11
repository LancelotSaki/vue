// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "./store/store"
//全局入口main.js引入element-ui
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app', /*最后效果将会替换页面中id为app的div元素*/
  router, /*使用路由*/
  store,
  components: { App }, /*告知当前页面想使用App这个组件*/
  template: '<App/>' /*告知页面这个组件用这样的标签来包裹着,并且使用它*/
})
//这里是定义一个全局的主键，其他vue可以随意调用(一般都不这么做,大都都是按需导入)
  // Vue.component('my-component', {
  //   template: '<div>A custom component!</div>'
  // })
