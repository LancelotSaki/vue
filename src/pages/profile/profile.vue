<template>
<div>
  <p>{{profileName}}</p>
  <p>{{$store.state.tabType}}</p>
</div>
</template>

<script>
    export default {
        name: "profile",
        data() {
          return {
            profileName : "个人中心"
          }
        }
    }
</script>

<style>

</style>
