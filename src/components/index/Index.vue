<template>
  <div id="index">
    <div id="nav-bar">
      <div id="nav">
        <div id="nav-left">
          <a href="###" id="logo">
            <li>ZUO</li>
          </a>
          <a href="###" id="logol">
            <li>HONEY WASABI</li>
          </a>
        </div>
        <div id="nav-middle">
          <ul>
            <li>
              <a href="index.html">首页</a>
            </li>
            <li>
              <a href="deepth.html">深度</a>
            </li>
            <li>
              <a href="###" @click="isDownapp">下载APP</a>
            </li>
          </ul>
          <div id="nav-search">
            <input type="text" placeholder="输入关键字搜索" @keydown.enter="search">
            <img src="../../assets/index/find.png" alt="">
          </div>
        </div>
        <div id="nav-right">
          <ul>
            <li>
              <a href="###">
                <img src="../../assets/index/user.png" alt="">
                <span @click="isLogin">登录</span>
              </a>
            </li>
            <li>
              <a href="###">
                <span @click="isRegister">注册</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--下载二维码界面-->


    <div id="dian"></div>
  </div>

</template>
<script>

  export default {
    name: 'index',
    data:function () {
      return{

      }
    },
    methods:{
        isDownapp:function () {
              this.$emit('pass')
        },
      isLogin:function () {
          //console.log("一样")
        this.$emit('down')
      },
      isRegister:function () {
        //console.log("一样")
        this.$emit('last')
      },
      search:function (ev) {
        //console.log(ev.target.value);
        if(!ev.target.value==''){
          window.location.href="search.html?q="+ev.target.value
        }
      }
    }

  }
</script>

<style scoped>
  *{
    margin:0;
    padding:0;
  }
  #dian{
    height: 60px;
  }
  #index{
    overflow: hidden;
  }
  #nav-bar{
    width: 100%;
    height: 60px;
    background-color:#272c2f ;
    position: fixed;
    z-index: 12;
  }
  #nav{
    width: 100%;
    display: flex;
    justify-content:space-between;
    color:white;
  }
  #nav-left{
    height: 60px;
    padding-left: 30px;
    padding-right: 30px;
    display: flex;
    align-items: center;
  }
  #nav-left li{
    list-style: none;
    display: inline-block;
  }
  #logo li{
    line-height: 60px;
    font-weight: bold;
    color: white;
    font-size: 21px;
  }
  #logol li{
    line-height: 70px;
    color: rgba(255,255,255,0.3);
    font-size: 12px;
    padding-left:7px;
  }
  /*nav-left*/
  /*nav-middle*/
  #nav-middle li{
    list-style: none;
    display: inline-block;
    margin-right: 30px;
    font-size: 14px;
  }
  #nav-middle li a{
    color: rgb(140,142,147);
    text-decoration: none;
  }
  #nav-middle li:nth-child(1) a{
    color: white;
  }
  #nav-middle ul{
    height: 24px;
    margin-top: 18px;
    display: inline-block;
  }
  #nav-search{
    width: 230px;
    height: 32px;
    display: inline-block;
    position: relative;
  }
  #nav-search input{
    width: 230px;
    height: 32px;
    padding: 6px 30px 6px 10px;
    background-color: #464b4d;
    outline: none;
    border:0;
    font-size: 14px;
    caret-color:white;
  }
  #nav-search img{
    position: absolute;
    right: 10px;
    top:8px;
    width: 18px;
    height: 18px;
  }
  /*nav-right*/
  #nav-right li{
    list-style: none;
    display: inline-block;
    line-height: 60px;
    font-size: 14px;
    margin-right: 30px;
  }
  #nav-right li a{
    text-decoration: none;
    color:#9ea0a5;
  }
  #nav-right li span{
    line-height: 24px;
  }
  #nav-right img{
    width: 16px;
    height: 16px;
  }

  #nav-right img{
    width: 16px;
    height: 16px;
    display: inline-block;
    margin-top: 3px;
  }
  /*登录注册*/

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

  #social-auth img{
    cursor: pointer;
  }
  #login-text img{
    width: 30px;
    height: 25px;
    margin: 0 20px;
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

  #other-action p{
    width: 137px;
    float: right;
    display: flex;
    justify-items: center;
    color: #272c2f;
    font-size: 14px;
  }
  #other-action a{
    font-size: 14px;
    color: #a6a7a7;
  }
  #other-action img{
    width: 13px;
    height: 17px;
    margin-left: 30px;
    margin-right: 10px;
  }


</style>

