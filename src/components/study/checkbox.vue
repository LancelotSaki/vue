<template>
    <div>
      单个勾选框:<input type="checkbox" id="checkbox" v-model="checked">
      <label for="checkbox">{{ checked }}</label>
      <p>多选框</p>
      <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
      <label for="jack">Jack</label>
      <input type="checkbox" id="john" value="John" v-model="checkedNames">
      <label for="john">John</label>
      <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
      <label for="mike">Mike</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
      <p>单选按钮</p>
      <input type="radio" id="one" value="One" v-model="picked">
      <label for="one">One</label>
      <br>
      <input type="radio" id="two" value="Two" v-model="picked">
      <label for="two">Two</label>
      <br>
      <span>Picked: {{ picked }}</span>
      <input
        type="checkbox"
        v-model="toggle"
        v-bind:true-value="a"
        v-bind:false-value="b"
      >
      <label>{{toggle}}</label>
    </div>
</template>

<script>
    export default {
        name: "checkbox",
        data(){
          return {
              checked : true,
              checkedNames: [],
              picked: '',
              toggle : true
          }
        }
    }
</script>

<style scoped>

</style>
