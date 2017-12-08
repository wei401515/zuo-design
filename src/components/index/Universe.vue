<template>
          <div id="uve" v-if="isUniverseShow">
             <div id="welcome">
                  <h1>可能是全宇宙最ZUO的图片社区</h1>
              <div id="ready">
                <span>和像你一样认真对待生活的人一起</span><br>
                <span>从设计的视角，重新认识世界</span>
              </div>
             </div>
            <button id="new-zuoer">创建ZUO账号</button>
            <img src="../../assets/index/close.png" alt="" @click="NoLogin">
          </div>
</template>

<script>
    export default {
        name: 'universe',
        data:function () {
          return{
            isUniverseShow:true
          }
        },
      methods: {
          NoLogin:function () {
                this.isUniverseShow=false
          }
      }
    }
</script>

<style scoped>
            #uve{
              background-repeat: repeat;
              background-color: #eaeced;
              width:100%;
              height: 214px;
              text-align: center;
              background-image: url("../../assets/index/overlay.png");
              position: relative;
              z-index: 2;
              /*margin-top: 60px;*/
            }
            #welcome{
              width: 790px;
              margin:0 auto;
              padding-top: 30px;
            }
            #welcome h1{
              width: 340px;
              font-size: 24px;
              margin: 0 auto;
              font-weight: 700;
              color: #272c2f;
              border-bottom: none;
              margin:0 auto;
            }
            #ready{
              margin-top: 15px;
              margin-bottom: 18px;
              font-size: 16px;
              color: #5d6c75;
            }
            #new-zuoer{
              background-color: #1fd7e2;
              color: #fff;
              width: 200px;
              font-size: 16px;
              border-radius: 4px;
              user-select: none;
              white-space: nowrap;
              padding:11.2px 16px;
              border:none;
            }
            #uve img{
              position: absolute;
              right: 35px;
              top: 40px;
              width: 16px;
              height: 16px;
            }
</style>

