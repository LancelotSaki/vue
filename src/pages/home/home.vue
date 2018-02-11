<template>
  <div>
    <ld-mall v-if="showPage === 'mall'" :parentMessage="inputMsg"></ld-mall>
    <ld-profile v-else></ld-profile>
    <ld-footer @fatherEmit="invokeChild"></ld-footer>
    <input v-model="inputMsg"/>
  </div>
</template>

<script>

  import ldFooter from '../footer/footerBar'
  import ldMall from '../mall/mall'
  import ldProfile from '../profile/profile'

    export default {
        name: "home",
        data() {
            return {
              showPage : "mall",
              inputMsg : "???"
            }
        },
        methods : {
          //传数组进来务必要与key对应
          invokeChild({name,hello}) {
             console.log("msg:"+name)
               this.showPage = this.$store.state.tabType
               console.log("showPage:"+this.showPage)
               this.inputMsg = hello
            },
        },
        components : {
          ldMall,
          ldProfile,
          ldFooter
        }
    }
</script>

<style scoped>

</style>
