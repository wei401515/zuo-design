<template>
  <div id="middle">
    <div id="mdn">
      <div id="mdl">
        <div id="topic">
          <a href="###">
            <img :src="message['cover']" alt="">
            <div id="topic-mask">
              <div id="topic-info">
                <div id="tip">
                  <span>话题</span>
                </div>
                <div id="light"></div>
                <div id="topic-title">
                  <span>{{message['title']}}</span>
                  <img src="../../assets/index/right.png" alt="">
                </div>
                <div id="focus">
                  <span>{{message['collect_count']}}人收藏</span>
                  <span>|</span>
                  <span>{{message['comment_count']}}个讨论</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div id="carsle">
          <div id="carsle-info" v-for="msg in message['comments']">
            <a href="###">{{msg['author']['username']}}:</a><span v-html="msg['text']"></span>
          </div>
        </div>
        <div id="design-idea">
          <div id="design-nav">
            <div id="dnl" @click="showList">
              <div id="list">
                <img src="../../assets/index/list.png" alt="">
              </div>
              <span>全部</span>
              <div id="list1">
                <img src="../../assets/index/downla.png" alt="">
              </div>
            </div>
            <div id="dnr">
              <div>
                <img src="../../assets/index/chooseh.png" alt="" >
                <span>好设计</span>
              </div>
              <div>
                <img src="../../assets/index/chooseb.png" alt="">
                <span>坏设计</span>
              </div>
            </div>
            <ul id="comment-list" v-if="isShowList" ref="list">
              <li>
                <a href="">
                  <img src="../../assets/index/list.png" alt="">
                  <span>全部</span>
                </a>
              </li>
              <li v-for="post in message2">
                <a href="####">
                  <div :style="{backgroundColor:post['sceneTag']['color']}"></div>
                  <span>{{post['sceneTag']['name']}}</span>
                </a>
              </li>
            </ul>
          </div>
          <div id="user-design">
            <div v-for="post in message2" id="every-user">
              <div id="user-info">
                <div id="user-img">
                  <img :src="post['owner']['avatar']" alt="">
                </div>
                <div id="username">
                  <p>{{post['owner']['username']}}</p>
                </div>
                <div id="talk">
                  <img src="../../assets/index/quan.png" alt="">
                  <span>{{post['likeCount']}}个赞同</span>
                  <img src="../../assets/index/relay.png" alt="" id="relay">
                  <img src="../../assets/index/jubao.png" alt="" id="jubao">
                </div>
              </div>
              <div id="user-display">
                <img :src="post['postImage']['url']" alt="">
                <div id="display-mask"></div>
                <div id="clickZan" :style="{left:post['haloCenterRatio']['width_ratio']*100+'%',
                                top:post['haloCenterRatio']['height_ratio']*100+'%'
                         }">
                  <div id="altitude">
                    <p>赞同</p>
                    <p>这个态度</p>
                  </div>
                </div>
                <div id="clickZan2" :style=
                  "{left:post['haloCenterRatio']['width_ratio']*100+'%',
                                top:post['haloCenterRatio']['height_ratio']*100+'%'
                         }">
                </div>
              </div>
              <div id="feed-content">
                <div id="feed-text">
                  {{post['postDescription']}}
                </div>
                <div id="tag-body">
                  <a href="###">
                    <div :style="{backgroundColor:post['sceneTag']['color']}"></div>
                    <span>{{post['sceneTag']['name']}}</span>
                  </a>
                  <a href="###" v-for="tag in post['tags']">
                    <div></div>
                    <span>{{tag}}</span>
                  </a>
                </div>
                <div id="feed-info">
                  <div id="comment-info">
                    <img src="../../assets/index/talk.png" alt="">
                    <span>{{post['commentedCount']}}条评论</span>
                    <span>更多评论...</span>
                  </div>
                  <div id="comment-item" v-for="comment in post['comments']">
                    <div id="comment-li">
                      <div id="comment-content">
                        <span>{{comment['author']['username']}}-</span>
                        <span v-html="comment['text']"></span>
                      </div>
                      <div id="comment-time">
                        <span>{{comment['timeAgo']}}</span>
                        <div>
                          <span id="callback">回复</span>
                          <span id="dianzan">点亮  {{comment['likeNumber']}}</span>
                          <img src="../../assets/index/light.png" alt="">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div v-show="isWrite1" @click="isWritetext">
                      <input type="text" id="write1" placeholder="写下你的评论...">
                    </div>
                    <div id="write-window">
                      <textarea name="" id="write2" placeholder="写下你的评论..."></textarea>
                      <div id="isWrite">
                        <span @click="cancelWrite">取消</span>
                        <span>评论</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="border">
              </div>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      <div id="mdr">
        <div id="hot-tags">
          <header>热门标签</header>
          <a href="###" v-for="tag in hot_tags">
            {{tag['content']}}
          </a>
        </div>
        <div id="hot-attend">
          <header>推荐关注</header>
        </div>
        <div v-for="reco_user in reco_users" id="hot-attender">
          <div id="jieshao">
            <div>
              <a href="###" id="tui">{{reco_user['username']}}</a>
            </div>
            <div>
              <a href="###" id="tuiwen">{{reco_user['introduction']}}</a>
            </div>
          </div>
          <div id="touxiang">
            <a href="###">
              <img :src="reco_user['avatar']" alt="">
            </a>
          </div>
        </div>
        <div id="ios">
          <a href="###">下载IOS版 App</a>
          <img src="" alt="">
        </div>
        <div id="ios2">
          <a href="###">关注微信公众号</a>
          <img src="" alt="">
        </div>
      </div>
    </div>
    <div id="upbtn" @click="Scrolltop" v-if="isMove">
      <img src="../../assets/index/upbtn.png" alt="">
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'middle',
    data() {
      return {
        message: {},
        message2: {},
        message3: {},
        reco_users: {},
        hot_tags: {},
        isBacktalk: false,
        isShowList: false,
        isMove: true,
        isWrite1: true,
      }
    },
    components: {},
    mounted() {
      let that = this;
      /* axios.get('api/topics')
         .then(function (response) {
//            console.log(response.data)
           that.message=response.data.topic

         }),
         axios.get('api/web_hot_posts')
           .then(function (response) {
//            console.log(response.data)
             that.message2=response.data.posts;

           }),
         axios.get('api/web_hot_tags')
           .then(function (response) {
//            console.log(response.data)
             that.hot_tags=response.data.hot_tags;

           }),
         axios.get('api/web_reco_users')
           .then(function (response) {
//            console.log(response.data)
             that.reco_users=response.data.reco_users;

           })*/
//       备用接口
      //话题
      axios.get('api/topics')
        .then(function (response) {
       // console.log(response.data)
          that.message = response.data.topic
        }),
        //默认设计（好坏）
        axios.get('api/web_hot_posts')
          .then(function (response) {
           // console.log(response.data)
            that.message2 = response.data.posts;
          }),
        //坏设计
//        axios.get('api/posts?design=bad&scene=%E5%85%A8%E9%83%A8')
//          .then(function (response) {
//            //console.log(response.data)
//            that.message3 = response.data.posts;
//          })
        //热门标签
        axios.get('api/web_hot_tags')
          .then(function (response) {
            // console.log(response.data)
            that.hot_tags = response.data.hot_tags;

          }),
        // 推荐关注
        axios.get('api/web_reco_users')
          .then(function (response) {
             //console.log(response.data)
            that.reco_users = response.data.reco_users;
          })

    },

    methods: {

      showList: function () {
        this.isShowList = !this.isShowList
      },
      Scrolltop: function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      },
//      评论框点击显示隐藏函数
      isWritetext: function (e) {
        e.target.parentNode.firstChild.style.display = "none";
        e.target.parentNode.parentNode.lastChild.style.display = "block";
      },
      cancelWrite: function (e) {
        e.target.parentNode.parentNode.style.display = "none";
        e.target.parentNode.parentNode.parentNode.firstChild.style.display = "block";
        e.target.parentNode.parentNode.parentNode.firstChild.querySelector("input").style.display = "block";
      },
    }
  }


</script>

<style scoped>
  #middle {
    background-color: rgb(244, 244, 244);
    /*margin-top: 30px;*/
    padding-top: 30px;
    z-index: 3;
  }

  #mdn {
    width: 830px;
    /*height: 600px;*/
    margin: 0 auto;
    background-color: rgb(244, 244, 244);
    overflow: hidden;
    padding-left: 20px;
    padding-right: 20px;
  }

  #mdl {
    width: 540px;
    /*height: 900px;*/
    /*background-color: red;*/
    float: left;
    position: relative;
  }

  /*话题*/
  #topic {
    background-color: white;
    height: 166px;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    position: relative;
    /*line-height: 0;*/
  }

  #topic img {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    width: 540px;
    height: 166px;
  }

  #carsle {
    background-color: white;
    height: 80px;
    margin-bottom: 30px;
  }

  /*蒙版*/
  #topic-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .4);
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    z-index: 2;
  }

  #topic-info {
    width: 480px;
    margin: 0 auto;
    margin-top: 18px;
    color: white;
  }

  #light {
    width: 20px;
    height: 5px;
    border-radius: 6px;
    background-color: #F8D440;
    margin-top: 10px;
  }

  #tip span {
    font-size: 14px;
  }

  #topic-title {
    font-size: 22px;
    line-height: 28px;
    margin-top: 30px;
    margin-bottom: 18px;
    position: relative;

  }

  #topic-title img {
    position: absolute;
    left: 137px;
    top: 3px;
    width: 24px;
    height: 24px;
  }

  #focus {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
  }

  /*头部评论*/
  #carsle {
    overflow: hidden;
  }

  #carsle-info {
    width: 500px;
    height: 44px;
    margin: 0 auto;
    margin-top: 18px;
  }

  #carsle-info a {
    font-size: 13px;
    color: black;
  }

  #carsle-info span {
    font-size: 13px;
    color: #888a88;
    cursor: pointer;
  }

  /*用户发帖*/
  #list {
    width: 16px;
    height: 21px;
    padding-top: 6px;
    display: inline-block;
    overflow: hidden;
  }

  #list1 {
    width: 16px;
    height: 21px;
    padding-top: 6px;
    display: inline-block;
    overflow: hidden;
  }

  #design-nav {
    clear: both;
    margin-bottom: 18px;
    height: 32px;
  }

  #design-nav span {
    font-size: 15px;
    line-height: 30px;
  }

  #dnl {
    position: relative;
    float: left;
  }

  /*全部和好坏设计栏*/
  #dnr {
    width: 178px;
    height: 22px;
    /*background-color: #ea1c0d;*/
    float: right;
    margin-top: 5px;
  }

  #dnr > div {
    display: inline-block;
  }

  #dnr div:last-child {
    margin-left: 18px;
  }

  #dnr img {
    width: 17px;
    height: 20px;
    padding-top: 3px;
    margin-right: 10px;
  }

  #dnr span {
    display: inline-block;
    line-height: 24px;
    vertical-align: top;
  }

  #dnr img:last-child {
    margin-left: 18px;
  }
  /*头部设计选择结束*/

  /*用户帖子栏*/
  #every-user {
    width: 540px;
    /*height: 200px;*/
    border-radius: 4px;
    background-color: white;
    margin-bottom: 18px;
    overflow: hidden;
  }

  #user-info {
    width: 504px;
    height: 40px;
    /*background-color: #f44336;*/
    margin: 0 auto;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  #user-img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    overflow: hidden;
    display: inline-block;
  }

  #user-img img {
    width: 40px;
    height: 40px;
  }

  #username {
    width: 98px;
    height: 21px;
    display: inline-block;
    margin-top: 10px;
    /*background-color: blue;*/
    vertical-align: top;
  }

  #username p {
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
  }

  /*右侧的赞同样式*/
  #talk {
    float: right;
    /*width: 160px;*/
    height: 21px;
    margin-top: 9.5px;
    font-size: 14px;
    line-height: 20px;
    color: #959697;
    display: flex;
  }

  #talk span {
    padding-left: 10px;
    padding-right: 18px;
  }

  #relay {
    width: 18px;
    height: 18px;
    vertical-align: baseline;
  }

  #jubao {
    width: 20px;
    height: 20px;
    margin-left: 18px;
    vertical-align: baseline;
  }

  /*评论样式*/
  #feed-content {
    padding: 18px 0 0;
  }

  #feed-text {
    line-height: 22px;
    padding: 0 25px 18px;
    color: #595c5d;
    font-size: 14px;
  }

  /*点赞动画*/
  #user-display {
    position: relative;
    cursor: zoom-in;
  }

  #clickZan {
    width: 114px;
    height: 114px;
    border-radius: 50%;
    border: 1px solid #1fd7e2;
    position: absolute;
    margin-top: -57px;
    margin-left: -57px;
  }

  #altitude {
    width: 80px;
    height: 70px;
    margin-top: 25px;
    margin-left: 15px;
    text-align: center;
    cursor: pointer;
  }

  #altitude p:first-child {
    font-size: 17px;
  }

  #altitude p {
    margin-bottom: 7px;
    color: white;
    display: none;
  }

  /*大图蒙版*/
  #display-mask {
    width: 540px;
    height: 540px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: rgba(39, 44, 47, .1);
    display: none;
  }

  #user-display:hover #display-mask {
    display: block;
  }

  /*移入效果*/
  #user-display:hover #altitude p {
    display: block;
  }

  #user-display:hover #clickZan {
    /*width: 125px;*/
    /*height: 125px;*/
    transform: scale(1.1);
    border-radius: 50%;
    border: 3px solid #1fd7e2;
    position: absolute;
    /*margin-top: -62px;*/
    /*margin-left: -62px;*/
    transition-duration: 0.1s;
  }

  #clickZan2 {
    position: absolute;
    width: 125px;
    height: 125px;
    border-radius: 50%;
    border: 1px solid #1fd7e2;
    animation: dianzan 0.9s linear infinite;
    cursor: pointer;
    margin-top: -62.5px;
    margin-left: -62.5px;
    background-color: rgba(31, 215, 226, .3);
  }

  @keyframes dianzan {

    0% {
      transform: scale(1.1);
      opacity: 1;
    }
    40% {
      transform: scale(1.15);
      opacity: 0.7;
    }
    70% {
      transform: scale(1.2);
      opacity: 0.3;
    }
    100% {
      transform: scale(1.25);
      opacity: 0;
    }
  }

  /*分类提示*/
  #tag-body {
    width: 490px;
    margin: 0 auto;
    padding-bottom: 13px;
    border-bottom: 1px solid #ececec;
  }

  #tag-body a {
    padding-right: 15px;
    font-size: 14px;
    color: #a6a7a7;
    text-decoration: none;
  }

  #tag-body a:hover {
    color: #272c2f;
  }

  #tag-body div {
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: #a6a7a7;;
    border-radius: 50%;
  }

  /*整体评论内容*/
  #feed-info {
    width: 540px;
    padding-top: 18px;
    padding-bottom: 10px;
  }

  /*评论内容--->评论数Ω*/
  #comment-info {
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 9px;
    display: flex;
  }

  #comment-info img {
    width: 18px;
    height: 18px;
  }

  #comment-info span {
    color: #a6a7a7;
    cursor: pointer;
    padding-left: 8px;
    font-size: 14px;
  }

  /*登录用户评论内容*/
  #comment-item {
    width: 520px;
    margin: 0 auto;
    padding: 9px 15px;
  }

  #comment-item:hover {
    background-color: rgb(245, 245, 245);
  }

  #comment-item span:first-child {
    font-size: 12px;
    font-weight: 600;
    color: #272c2f;
  }

  #comment-item span:last-child {
    font-size: 12px;
    color: #595c5d;
  }

  #comment-time > div {
    float: right;
    padding-right: 3px;

  }

  #comment-time span:first-child {
    color: #c9c9c9;
  }

  #dianzan {
    font-size: 12px;
    color: #a1a2a3;
  }

  /*回复移入移出隐藏效果*/
  #callback {
    display: none;
  }

  #comment-item:hover #callback {
    display: inline-block;
  }

  /*写下你的评论*/

  #write1 {
    width: 490px;
    height: 56px;
    outline: 0;
    border: none;
    padding: 18px 10px 18px 2px;
    font-size: 14px;
    line-height: 20px;
    display: block;
    margin: 0 auto;
    border-top: 1px solid rgb(244, 244, 244);
  }

  #write2 {
    display: block;
    width: 490px;
    height: 100px;
    outline: 0;
    border: none;
    padding: 18px 10px 18px 2px;
    font-size: 14px;
    line-height: 20px;
    margin: 0 auto;
    border-top: 1px solid rgb(244, 244, 244);
  }

  #write-window {
    display: none;
  }

  #isWrite {
    width: 490px;
    padding: 15px;
    overflow: hidden;
    margin: 0 auto;
  }

  #isWrite span:first-child {
    float: left;
    font-size: 14px;
  }

  #isWrite span:last-child {
    float: right;
    font-size: 14px;
  }

  /*中间左侧样式结束*/


  /*下拉菜单*/
  #comment-list {
    width: 100px;
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    top: 315px;
    left: -10px;
    z-index: 3;
  }

  #comment-list div {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 2px;
  }

  #comment-list li > span {
    margin-left: 2px;
  }

  #comment-list li {
    list-style: none;
    border-bottom: 1px solid #ececec;
    padding: 5px 0;
    display: flex;
  }

  #comment-list li:last-child {
    border-bottom: none;
  }

  #comment-list a {
    padding: 10px 15px;
    text-decoration: none;
    color: #a6a7a7;
    font-weight: 500;
    text-align: center;
    border-radius: 4px;
  }

  #comment-list img {
    width: 14px;
    height: 14px;
  }

  #comment-list li:first-child a {
    display: flex;
    align-items: center;
  }

  /*中间   右部分*/
  #mdr {
    width: 220px;
    height: 600px;
    /*background-color: darkslateblue;*/
    float: right;
  }

  #hot-tags a {
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 6px 10px;
    font-size: 14px;
    color: #999b9c;
    background-color: #eaeced;
    border-radius: 4px;
    -webkit-transition-duration: .3s;
    transition-duration: .3s;
    text-decoration: none;
  }

  #hot-tags a:hover {
    color: white;
    background-color: #87898a;
  }

  #hot-tags header {
    margin-bottom: 18px;
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
  }

  /*推荐关注*/
  #hot-attend header {
    margin-top: 40px;
    font-size: 14px;
    font-weight: 500;
    color: #272c2f;
  }

  #hot-attender {
    overflow: hidden;
    padding: 10px 0px;
    width: 220px;
    overflow: hidden;
    border-bottom: 1px solid #e4e4e5;
  }

  #jieshao {
    width: 146px;
    float: left;
  }

  #tui {
    font-weight: 500;
    color: #535557;
    text-decoration: none;
    font-size: 14px;
  }

  #tui:hover {
    color: #999a9a;
  }

  #tuiwen {
    font-weight: 500;
    line-height: 18px;
    text-decoration: none;
    font-size: 12px;
    color: #999a9a;
  }

  #tuiwen:hover {
    color: #535557;
  }

  #touxiang img {
    width: 40px;
    height: 40px;
  }

  #touxiang {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    overflow: hidden;
    float: right;
  }

  #ios, #ios2 {
    margin-top: 30px;
    height: 50px;
    border: 1px solid #ececec;
    border-radius: 4px;
  }

  #ios2 {
    margin-top: 10px;
  }

  #ios a, #ios2 a {
    display: inline-block;
    width: 169px;
    height: 50px;
    border-right: 1px solid #ececec;
    text-align: center;
    line-height: 50px;
    color: #272c2f;
    text-decoration: none;
    font-size: 14px;

  }

  #ios:hover {
    background-color: white;
  }

  #ios2:hover {
    background-color: white;
  }

  /*上升按钮*/
  #upbtn {
    width: 40px;
    height: 40px;
    border-radius: 4px;
    background-color: #939595;
    position: fixed;
    right: 30px;
    top: 77%;
    cursor: pointer;
  }

  #upbtn img {
    width: 15px;
    height: 15px;
    display: block;
    margin: 0 auto;
    margin-top: 12.5px;
  }
</style>
