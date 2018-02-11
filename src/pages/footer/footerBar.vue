<template>
<div id="footerBar">
  <el-tabs v-model="activeName" @tab-click="handleClick" :tab-position="tabPosition" class="guide_item">
    <el-tab-pane label="乐豆商城" name="first" type="success"></el-tab-pane>
    <el-tab-pane label="活动中心" name="second"></el-tab-pane>
    <el-tab-pane label="个人中心" name="third"></el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
  export default {
    name: 'footerBar',
    data () {
      return {
        activeName: 'first',
        tabPosition: 'bottom'
      }
    },
    methods: {
      handleClick(tab, event) {
        let tabType = "mall"
        if(tab.index == '0') {
          tabType = "mall"
        }else {
          tabType = "profile"
        }
        this.$store.state.tabType = tabType
        this.$emit("fatherEmit",{"name":"你好","hello":"world"})
        console.log(tab, event);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  #footerBar{
    background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .guide_item{
    flex: 1;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
  }
</style>
