<template>
  <div>
    <p>全局共享</p>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <simple-counter></simple-counter>
    <p>单独</p>
    <single-counter></single-counter>
    <single-counter></single-counter>
    <single-counter></single-counter>
    <p>父子组件之间的通信：{{ total }}</p>
    <button-counter v-on:increment="incrementTotal"></button-counter>
    <button-counter v-on:increment="incrementTotal"></button-counter>
  </div>
</template>

<script>
  import Vue from 'vue'
  var data = { counter: 0 }
  //全局共享
  Vue.component('simple-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
    // 但是我们却给每个组件实例返回了同一个对象的引用
    data: function () {
      return data
    }
  })
 //独立
  Vue.component('single-counter', {
    template: '<button v-on:click="counter += 1">{{ counter }}</button>',
    // 技术上 data 的确是一个函数了，因此 Vue 不会警告，
    // 但是我们却给每个组件实例返回了同一个对象的引用
    data: function () {
      return {
        counter: 0
      }
    }
  })

  Vue.component('button-counter', {
    template: '<button v-on:click="incrementCounter">{{ counter }}</button>',
    data: function () {
      return {
        counter: 0
      }
    },
    methods: {
      incrementCounter: function () {
        this.counter += 1
        //使用 $on(eventName) 监听事件
        //使用 $emit(eventName) 触发事件,
        // 对应上边的 v-on:increment="incrementTotal"
        //incrementTotal对应父组件的事件
        this.$emit('increment')
      }
    },
  })


  export default {
    name: "button",
    data: function () {
      return {
        total: 0
      }
    },
    methods: {
      incrementTotal: function () {
        this.total += 1
      }
    }
  }
</script>

<style scoped>

</style>
