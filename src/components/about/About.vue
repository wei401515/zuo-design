<template>
  <div>
      <h3>这是子组件</h3>
  <p>我是关于, 点我去<a href="index.html">首页</a></p>
  <p>{{mores}}</p>
  </div>
</template>
<script>
  import  axios from 'axios'
  export default {
    name: 'about',
     mounted:function () {
       let _this=this
       axios.get('api/articles')
         .then(function (response) {
           console.log(response.data)
           _this.mores=response.data.articles;
         })
     },
      data:function () {
          return{
                mores:{}
          }
      },
      methods:{

      }
  }
</script>

<style scoped>

</style>
