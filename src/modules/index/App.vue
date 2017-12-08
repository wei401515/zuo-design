<template>
  <div id="all">
  <my-index @pass="isDownapp" @down="isShowLogin" @last="isShowRegister"></my-index>
  <my-universe></my-universe>
  <my-middle></my-middle>
  <my-footer></my-footer>
    <div  v-show="isShowapp" @click="refuseapp">
      <my-downapp></my-downapp>
    </div>
    <div v-show="isDoLogin" @click="refuseLogin">
      <my-mask ></my-mask>
    </div>
      <my-login v-show="isNowLogin"></my-login>
      <my-register v-show="isNowRegister"></my-register>
  </div>
</template>

<script>
  import MyIndex from '../../components/index/Index'
  import MyFooter from '../../components/index/Footer'
  import  MyMiddle  from "../../components/index/Middle"
  import  MyUniverse  from "../../components/index/Universe"
  import  MyDownapp  from "../../components/index/Downapp"
 import  MyLogin  from "../../components/index/Login"
  import  MyMask from "../../components/index/Mask"
  import  MyRegister from "../../components/index/Register"
   export default {
    name: 'index',
     data:function () {
       return{
         isShowapp:false,
         isDoLogin:false,
         isNowLogin:false,
         isNowRegister:false
       }
     },
     methods:{
//                app窗口
       isDownapp:function () {
         this.isShowapp=true
       },
       refuseapp:function () {
         this.isShowapp=false
       },
       //            登录窗口
       isShowLogin:function () {
         this.isDoLogin=true
         this.isNowLogin=true
       },
       refuseLogin:function () {
         this.isNowLogin=false
         this.isDoLogin=false
         this.isNowRegister=false
       },
//       注册窗口
       isShowRegister:function () {
    this.isDoLogin=true
    this.isNowRegister=true
  }
     },
    components: {
        MyIndex,
        MyFooter,
        MyMiddle,
      MyUniverse,
      MyDownapp,
      MyLogin,
      MyMask,
      MyRegister
    },
     props:[]
  }
</script>

<style scoped>
  @import "../../common/style/marx.min.css";
  /*#all{*/
    /*overflow: hidden;*/
  /*}*/
</style>
