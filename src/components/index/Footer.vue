<template>
          <div>
            <div id="footer">
                  <div id="footer-inner">
                    <div id="fit">
                      <a href="###" @click="isShowWe">关注公众号</a>
                      <a href="">关于ZUO</a>
                      <a href="###" @click="isShowIwindow">反馈吐槽</a>
                    </div>
                    <div id="fil">
                      <span>上海设慧网络科技有限公司2016版权所有</span>
                      <span>沪ICP备15013372号</span>
                    </div>
                  </div>
            </div>
            <!--公众号-->
            <div id="wechat" v-if="isShowWeChat" @click="noScan">
              <img src="../../assets/index/wechat.png" alt="">
            </div>
            <!--意见反馈-->
            <div id="user-idea" v-if="isShowIdea" @click="noIdea">
            </div>
            <div id="idea-window" v-if="isShowIdeaText">
              <div id="idea-title">
                <span>意见反馈</span>
              </div>
              <div id="idea-nei">
                <textarea id="idea-text" placeholder="你有啥向ZUO的，快告诉我们呀~"></textarea>
                <div id="btn">
                  <button>提交反馈</button>
                </div>
              </div>
            </div>
          </div>
</template>

<script>
    export default {
        name: 'footer',
        data:function () {
          return{
            isShowWeChat:false,
            isShowIdea:false,
            isShowIdeaText:false
          }
        },
        methods:{
          isShowWe:function () {
            this.isShowWeChat=true
          },
          noScan:function () {
            this.isShowWeChat=false
          },
          noIdea:function () {
            this.isShowIdea=false
            this.isShowIdeaText=false
          },
          isShowIwindow:function () {
            this.isShowIdea=true,
            this.isShowIdeaText=true
          }
        }
    }
</script>

<style scoped>
        #footer{
          width:100%;
          height: 83px;
          background-color: #eaeaea;
          /*margin-top: 60px;*/
        }
        #footer-inner{
          width:420px;
          margin:0 auto;
          padding-top: 18px;
          padding-bottom: 18px;
          text-align: center;
        }
        #fit a{
          text-decoration: none;
          font-size: 13px;
          color: #999a9a;
          margin: 0 10px;
        }
        #fil{
          margin-top: 10px;
        }
        #fil span{
          font-size: 13px;
          color: #b8b9b9;
          font-weight: 400;
        }
        #fil span:first-child{
          padding-right: 15px;
        }
        /*公众号*/
        #wechat{
          position: fixed;
          top: 0;
          left:0;
          width:100%;
          height: 100%;
          z-index: 30;
          background-color:rgba(39,44,47,.9);
        }
        #wechat img {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 436px;
          height: 440px;
          margin-top: -220px;
          margin-left: -218px;
        }
        /*意见反馈*/
        #user-idea{
          position: fixed;
          top: 0;
          left:0;
          width:100%;
          height: 100%;
          z-index: 30;
          background-color:rgba(39,44,47,.9);
        }
        #idea-title{
          text-align: center;
          justify-content: center;
          background-color: #272c2f;
          font-size: 18px;
          padding-top: 25px;
          padding-bottom: 25px;
          color: #fff;
          border-top-left-radius: 4px;
          border-top-right-radius: 4px;
        }
        #idea-window{
          width: 540px;
          position:fixed;
          top: 110px;
          width: 540px;
          left: 50%;
          margin-left: -270px;
          z-index: 40;
        }
        #idea-nei{
          background-color: white;
          height: 316px;
          overflow: hidden;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
        }
        #idea-text{
          width: 480px;
          border: 1px solid #ececec;
          height: 186px;
          background-color: #f6f6f6;
          resize: none;
          padding: 15px;
          margin:0 auto;
          border-radius: 4px;
          vertical-align: middle;
          box-sizing: border-box;
          margin-top: 30px;
          font-size: 14px;
          outline:none;
        }
        #btn{
          width: 480px;
          margin:0 auto;
          margin-top: 20px;
        }
        #btn button{
          background-color: #1fd7e2;
          color: #fff;
          border: rgba(0,0,0,0);
          width: 480px;
          height: 50px;
          margin:0 auto;
          font-size: 18px;
        }
</style>
