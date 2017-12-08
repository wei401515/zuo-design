<template>
  <div id="car" >
    <!--登录窗口-->
    <div id="login-window" >
      <div id="login-header" v-if="isLogin">
        <header>
          <img src="../../assets/index/bird.png" alt="">
          <span>欢迎回到ZUO</span>
        </header>
        <div id="login-text">
          <div id="social-auth">
            <img src="../../assets/index/xinlang.png" alt="">
            <img src="../../assets/index/weixin.png" alt="">
          </div>
          <div id="social-tip">
            你可以使用第三方社交账号直接登录
          </div>
          <div id="driver">
            <div></div>
            <span>或者</span>
            <div></div>
          </div>
          <div id="form-body">
            <div>
              <input type="text" placeholder="手机号" ref="phoneNumber">
            </div>
            <div v-show="isShowconfirm" id="confirm">
              <input type="text" placeholder="验证码" ref="checkNumber">
              <button>发送验证码</button>
            </div>
            <div v-show="isShowpassword">
              <input type="text" placeholder="密码" >
            </div>
            <div v-show="isShowpasswordAgain">
              <input type="text" placeholder="确认密码" >
            </div>
          </div>
          <div id="other-action" v-show="isChooseConfirm">
            <a href="###" @click="isRegister">没有账号？去注册</a>
            <p @click="usePassword"><img src="../../assets/index/lock.png" alt="" >手机验证码登录</p>
          </div>
          <div id="other-action2" v-show="isPassword">
            <a href="###">忘记密码？</a>
            <p @click="useConfirm"><img src="../../assets/index/lock.png" alt="">手机密码登录</p>
          </div>
          <div id="other-action3" v-show="isAgree">
            <p><input type="checkbox">我已经认真阅读并同意ZUO的<a href="###">《用户协议》</a></p>
            <p @click="useConfirm2"><img src="../../assets/index/lock.png" alt="">已有账号，登录</p>
          </div>
          <div id="push">
            <button id="push-button">登录</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data:function () {
      return{
        isCloseWindow:true,
        isLogin:true,
//          文字选择样式变化
        isChooseConfirm:true,
        isPassword:false,
//          密码和验证码输入框
        isShowpassword:true,
        isShowconfirm:false,
//          确认密码输入框
        isShowpasswordAgain:false,
//          同意协定文字
        isAgree:false,

        //登录注册
          username:'',
          pwd:'',
          checkpwd:''
      }
    },
    methods:{
      usePassword:function () {
        this.isChooseConfirm=false;
        this.isPassword=true;
        this.isShowpassword=false;
        this.isShowconfirm=true
      },
      useConfirm:function () {
        this.isChooseConfirm=true;
        this.isPassword=false;
        this.isShowpassword=true;
        this.isShowpasswordAgain=false;
        this.isShowconfirm=false;
      },
      isRegister:function () {
        this.isShowconfirm=true;
        this.isShowpassword=true;
        this.isShowpasswordAgain=true;
        this.isAgree=true;
        this.isChooseConfirm=false
      },
      useConfirm2:function () {
        this.isChooseConfirm=true;
        this.isPassword=false;
        this.isShowpassword=true;
        this.isShowpasswordAgain=false;
        this.isShowconfirm=false;
        this.isAgree=false
      },
//      判断是否可以登录

    },


  }
</script>

<style scoped>

  #login-window{
    position:fixed;
    width: 540px;
    height: 662px;
    top: 50%;
    left: 50%;
    margin-left: -270px;
    margin-top: -431px;
    z-index: 30;
  }
  header{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 540px;
    margin:0 auto;
    background-color: #272c2f;
    padding-top: 25px;
    padding-bottom: 25px;
    color: #fff;
    font-size: 18px;
    margin-top: 110px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  header span{
    padding-left: 15px;
  }
  #login-text{
    width: 540px;
    margin:0 auto;
    background-color: white;
    padding-top: 30px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  #social-auth{
    height: 44px;
    display: flex;
    justify-items: center;
    justify-content: center;
    align-items: center;
  }
  #social-auth img{
    cursor: pointer;
  }
  #login-text img{
    width: 30px;
    height: 25px;
    margin: 0 20px;
  }
  #social-tip{
    text-align: center;
    margin-top: 13px;
    margin-bottom: 13px;
    font-size: 14px;
    color: #a6a7a7;
    text-align: center;
  }
  #driver{
    width: 340px;
    display: flex;
    justify-content: space-between;

    margin:0 auto;
  }
  #driver div{
    height: 1px;
    width: 138px;
    background-color: #d7d8d8;
    display: inline-block;
    margin-top: 10.5px;
  }
  #driver span{
    font-size: 14px;
    color: #d7d8d8;
  }
  #form-body>div{
    width: 480px;
    height: 50px;
    margin:0 auto;
    margin-top: 20px;
  }
  #form-body>div:first-child{
    width: 480px;
    height: 50px;
    margin:0 auto;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  #form-body input{
    width: 480px;
    height: 50px;
    background-color: #f7f7f7;
    padding: 14px 20px;
    font-size: 14px;
    line-height: 22px;
    outline: none;
  }
  #other-action,#other-action2,#other-action3{
    width: 480px;
    margin:0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  #confirm{
    position: relative;
  }
  #confirm button{
    position: absolute;
    top: 4px;
    right: 5px;
    width: 115px;
    height: 44px;
    background-color:#1fd7e2;
    font-size: 14px;
  }
  /*选择密码登录或验证码登录文字栏*/
  #other-action p,#other-action2 p{
    width: 157px;
    float: right;
    display: flex;
    justify-items: center;
    color: #272c2f;
    font-size: 14px;
  }
  #other-action a,#other-action2 a{
    font-size: 14px;
    color: #a6a7a7;
    text-decoration: none;
  }
  #other-action img,#other-action2 img,#other-action3 img{
    width: 13px;
    height: 17px;
    margin-left: 30px;
    margin-right: 10px;
  }
  /*确认注册栏*/
  #other-action3{
    overflow: hidden;
  }
  #other-action3 p:first-child{
    float: left;
    font-size: 14px;
    text-decoration: none;
  }
  #other-action3 p:last-child{
    float: right;
    font-size: 14px;
  }
  #push{
    margin:0 auto;
    width: 480px;
    margin-bottom: 30px;
  }
  #push-button{
    width: 480px;
    height: 50px;
    background-color: #1fd7e2;
    color: #fff;
    border-radius: 4px;
    font-size: 18px;
    margin-bottom: 30px;
  }

</style>
