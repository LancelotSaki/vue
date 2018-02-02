<template>
    <div>
      <p>简单型select框，无ID</p>
      <select v-model="select">
        <option disabled value="">请选择</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
      </select>
      <span>Selected: {{ select }}</span>
      <p>复杂型select框，有id有value</p>
      <select v-model="selected">
        <option v-for="option in options" v-bind:value="option.value">
          {{ option.text }}
        </option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
</template>

<script>
    export default {
        name: "select",
        data() {
           return {
              select : '',
             selected: '100300',
             options: [
               { text: '贵港', value: '100100' },
               { text: '桂林', value: '100200' },
               { text: '南宁', value: '100300' }
             ]
           }
        }
    }
</script>

<style scoped>

</style>
