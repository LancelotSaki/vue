<template>
  <!--外层必须加上一个div元素-->
  <div id="study">
    <p>{{ msg }}</p>
    <button v-on:click="reverseMessage">逆转</button>
    <p v-once>这个将不会改变：{{person.username}}</p>
    <p>双向动态绑定:{{person.username}}</p>
    <input v-model="person.username" v-bind:title="tip" v-bind:placeholder="tip" v-on:keyup.enter="inputAlert">
    <p v-bind:title="msg">
      鼠标悬停几秒钟查看此处动态绑定的提示信息
    </p>
    <p v-if="flag">为true时显示的信息</p>
    <p v-else>为false时显示信息</p>

    <ol>
      <li v-for="(value,key) in types" :key="value.id">
        {{key}}:{{ value.text }}
      </li>
    </ol>
    <P>点击了{{counter}}</P>
    <button v-bind:disabled="flag" v-on:click="addClick">点击一次加一次</button>
    <a v-bind:href="url">这是一个动态的超链接</a>
    <p>当前时间(每点击一次获取新的一次):{{now}}</p>
    <p>
      Ask a yes/no question:
      <input v-model="question" v-bind:placeholder="askQuestion">
    </p>
    <p>{{ answer }}</p>
    <my-title></my-title>
  </div>
</template>

<script>

  import Vue from 'vue'
  import jquery from 'jquery'

  //模板引入方式1,从内部写入，跟jquery中.html('<div></div>')差不多，不怎么推荐这种做法
  Vue.component('my-title', {
    template: `<button v-on:click="btnClick">数据交互</button>`,
    data() {
      return {
        //只在内部有效,主模板同参数的属性并不会出现冲突
        msg: '换行美滋滋'
      }
    },
    methods: {
      btnClick : function () {
        var json = {};
        jquery.ajax({
          url : 'http://192.168.1.160:8080/first/hello',
          type : 'get',
          data : json,
          dataType : 'jsonp',
          jsonp: "callbackParam", //服务端用于接收callback调用的function名的参数
          timeout: 3000,
          contentType: "application/json; charset=utf-8",
          success : function(data) {
            alert(JSON.stringify(data));
          },
          error : function(err) {
            if(err.status == '404' && err.readyState == '4') {
              alert("访问地址异常!");
            }else if(err.status == '0' && err.readyState == '0' && err.statusText == 'timeout') {
              alert("访问超时!");
            }else{
              alert("ajax获取数据异常!" + JSON.stringify(err));
            }
          }
        })
      }
    }
  })


    export default {
      name: "study",
      data() {
        return {
          msg: 'hello world',
          tip: "窝系渣渣辉，系兄弟来砍我",
          person: {
            username: "渣渣辉",
          },
          array: [1, 2, 3, 4, 5, 6],
          flag: true,
          url: "https://www.baidu.com",
          now: '123',
          types: [
            {
              text: "java"
            },
            {
              text: "c++"
            },
            {
              text: "c"
            }
          ],
          question: '',
          answer: 'I cannot give you an answer until you ask a question!',
          counter : 0
        }
      },
      methods: {//及时性相应
        reverseMessage: function () {
          //当然写在html元素里也可以，但是不推荐那样做
          this.msg = this.msg.split('').reverse().join('')
          if (this.flag) {
            this.flag = false
            this.url = "https://www.acfun.com"
          } else {
            this.flag = true
            this.url = "https://www.baidu.com"
          }
          this.now = Date.now()
        },
        addClick : function (event) {
          this.counter = this.counter + 1;
          alert(JSON.stringify(event.target.tagName))
        },
        inputAlert : function () {
           alert("哥不要回车好吗!")
        }
      },
      computed: {//非及时性响应
        nowTime: function () {
          this.now = Date.now()
        },
        askQuestion : function () {
          let ask = "请输入你的问题"
          return ask
        }
      },
      watch: {
        // 如果 `question` 发生改变，这个函数就会运行
        question: function (newQuestion) {
          this.answer = 'Waiting for you to stop typing...'
          //this.getAnswer()
        }
      }
    }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
