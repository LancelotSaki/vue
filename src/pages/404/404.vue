<template>
    <p>{{errMessage}}</p>
</template>

<script>
    export default {
        name: "404",
        data : function () {
           return {
             errMessage : '抱歉，未找到你要找的路径'
           }
        }
    }
</script>

<style scoped>

</style>
