<template>
  <div>
    <el-button @click="openMall" plain >打开商城</el-button>
    <el-button type="primary" @click="openTable" plain>table打开</el-button>
    <el-button type="success" plain>成功按钮</el-button>
    <el-button type="info" plain>信息按钮</el-button>
    <el-button type="warning" plain>警告按钮</el-button>
    <el-button type="danger" plain>危险按钮</el-button>
  </div>
</template>

<script>
    export default {
        name: "element",
      data() {
        return {

        }
      },
      methods : {
        openMall() {
          this.$router.push({ name: 'mall', params: { id: 123 }})
        },
        openTable() {
          this.$router.push({name:"table",params : {id : 123}})
        }
      },
    }
</script>

<style>

</style>
