import vue from "vue"
import vuex from "vuex"
vue.use(vuex)

//定义全局的数据在这，方便子模块与父模块之间的数据交互
//调用zlUrl变量可以在子模块中的computed方法监听之后使用this.$store.state.zlUrl获取数据
//一定要在main.js中先引入该文件
const store = new vuex.Store({
  // 定义状态
  state: {
    tabType : "mall"
  }
})
export default store
