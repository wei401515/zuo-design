<template>
        <div id="all-deepth">
          <my-index @pass="isDownapp" @down="isShowLogin" @last="isShowRegister"></my-index>
          <my-middlet></my-middlet>
          <my-middleb></my-middleb>
          <my-footer></my-footer>
          <div  v-show="isShowapp" @click="refuseapp">
          <my-downapp></my-downapp>
          </div>
          <div v-show="isDoLogin" @click="refuseLogin">
          <my-mask ></my-mask>
          </div>
          <div v-show="isNowLogin" >
            <my-login></my-login>
          </div>
          <div v-show="isNowRegister">
          <my-register></my-register>
          </div>
        </div>
</template>

<script>

  import  MyIndex  from "../../components/index/Index"
  import  MyMiddlet  from "../../components/deepth/Middlet"
  import  MyMiddleb  from "../../components/deepth/Middleb"
  import  MyFooter from "../../components/index/Footer"
  import  MyDownapp  from "../../components/index/Downapp"
  import  MyLogin from "../../components/deepth/Login"
  import  MyRegister from "../../components/index/Register"
  import  MyMask from "../../components/index/Mask"

    export default {
        name: 'deepth',
      components:{
          MyFooter,
          MyIndex,
          MyMiddlet,
          MyMiddleb,
          MyDownapp,
          MyLogin,
          MyMask,
        MyRegister,

      },
      data:function () {
            return{
              isShowapp:false,
              isDoLogin:false,
              isNowLogin:false,
              isNowRegister:false,
              isSearch:false
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
//           注册窗口
            isShowRegister:function () {
              this.isDoLogin=true
              this.isNowRegister=true
            },

      }

    }
</script>

<style scoped>
  @import "../../common/style/marx.min.css";

</style>
