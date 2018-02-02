<template>
  <div id="app">
   <my-study v-bind:class="[{left : isLeft}]" v-if="isShowStudyTemplate"></my-study>
    <my-checkbox v-if="isShowCheckBoxTemplate"></my-checkbox>
    <my-select v-if="isShowSelectTemplate"></my-select>
    <my-button v-if="isShowButtonTemplate"></my-button>
    <router-link to="/menu">菜单</router-link>
    <router-link to="/m">这是一个未知链接</router-link>
  </div>
</template>

<script>
  //导入模板
  import study from './study/study'
  import checkbox from './study/checkbox'
  import select from './study/select'
  import button from './study/button'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        isLeft : false,
        //是否渲染引用模板文件里的内容
        isShowStudyTemplate : false,
        isShowCheckBoxTemplate : true,
        isShowSelectTemplate : false,
        isShowButtonTemplate : true
      }
    },
    //模板方式二：从外部导入
     components : {
       'my-study' : study,
       'my-checkbox' : checkbox,
       'my-select' : select,
       'my-button' : button
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.left {
  float: left;
}
</style>
