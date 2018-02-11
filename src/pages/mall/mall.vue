<template>
    <div>
    <div class="pictureDiv">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="(value,key) in pictures" :key="value.id">
          <img :src="value.image" class="imageDiv" @click="openImageUrl(key)">
        </el-carousel-item>
      </el-carousel>
    </div>
      <P>{{mallName}}</P>
      <p>{{parentMessage}}</p>
    </div>
</template>

<script>

  import image1 from "../../images/eat.jpg"
  import image2 from "../../images/goodjob.jpg"
  import image3 from "../../images/unknown.jpg"
    export default {
        name: "mall",
        data (){
          return {
             mallName : "这是一个商城",
             pictures :  [
               { image: image1 },
               { image: image2 },
               { image: image3 }]
          }
        },
      props : ["parentMessage"],
      methods : {
        setData(id) {
          if (id) {
            //加载完成，去掉loading
            let loadingInstance = this.$loading({
              text: '加载中.....',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            this.mallName  = id.toString()
            setTimeout(() => {
              this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close();
              });
            }, 2000);
          }
        },
        openImageUrl(index) {
          console.log("id:"+index)
          if(index=='0') {
            this.$router.push({ name: 'mall', params: { id: 123 }})
          }else {
            this.$router.push({ name: 'profile'})
          }
        }
      },
      beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当守卫执行前，组件实例还没被创建
        //相当于js中的window.onload()
        next(vm => vm.setData(to.params.id))
      },
      beforeRouteUpdate (to, from, next) {
        // 在当前路由改变，但是该组件被复用时调用
        // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
        // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
        // 可以访问组件实例 `this`
        let id = to.params.id
        if(id == 'undefined' || id == null) {
          this.$router.push({name: '404'})
        }else {
          this.setData(to.params.id)
        }
      },
      beforeRouteLeave (to, from, next) {
        // 导航离开该组件的对应路由时调用
        // 可以访问组件实例 `this`
        const answer = window.confirm('未保存数据,你确定是否要离开!')
        if (answer) {
          next()
        } else {
          next(false)
        }
        console.log("守卫3")
      },
      components : {

      }
    }
</script>

<style>
.pictureDiv {

}
  .imageDiv {
    width: 100px;
    height: 100px;
  }
</style>
