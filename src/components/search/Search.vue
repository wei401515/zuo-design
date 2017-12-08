<template>
        <div id="search-all">
            <header>相关深度阅读</header>
          <div id="user-articles">
              <div v-for="article in articles" id="about-read"
                   :style="{backgroundImage:'url('+article['banner']+')'}">
                    <a>{{article['title']}}</a>
                    <p>{{article['summary']}}</p>
              </div>
          </div>
          <header>相关用户</header>
          <div id="user-list">
            <div v-for="Tagname in Tagnames" id="user-info">
              <div id="ult">
                <span>{{Tagname['username']}}</span>
                <button id="attention">关注</button>
              </div>
              <div id="ulb">
                    <div id="user-pic">
                      <img :src="Tagname['avatar']" alt="">
                    </div>
                <div id="pushNumber">
                  <span>{{Tagname['all_createposts_count']}}</span>
                  <p>发布</p>
                </div>
                <div id="likeNumber">
                  <span>{{Tagname['allLikesCount']}}</span>
                  <p>被赞</p>
                </div>
              </div>
            </div>
          </div>
              <header>相关ZUO</header>
              <div id="about-users">
                    <div id="about-user" v-for="poster in posts ">
                        <div id="from-user">
                          <span>来自</span><a href="###">{{poster['owner']['username']}}</a>
                        </div>
                        <div id="pic-user">
                          <img :src="poster['postImage']['url']" alt="">
                        </div>
                          <div id="tag-body">
                                <div id="tag-color" :style="{backgroundColor:poster['sceneTag']['color']}"></div>
                                <a href="###">{{poster['sceneTag']['name']}}</a>
                          </div>
                          <div id="feed-other-info">
                              <span>{{poster['likeCount']}}</span>
                              <span>{{commentedCount}}</span>
                          </div>
                    </div>
              </div>
        </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: 'search',
       mounted(){
          let vb=this.buhao()
         let  that=this
        axios.get('api/search/users?q='+vb).then(function (response) {
                //console.log(response.data);
                that.Tagnames=response.data.users;
                console.log(that.Tagnames)
          }),
          axios.get('api/search/articles?q='+vb).then(function (response) {
            //console.log(response.data);
            that.articles=response.data.pgcs;
            //console.log(that.Tagnames)
          }),
          axios.get('api/search/posts?q='+vb).then(function (response) {
            //console.log(response.data);
            that.posts=response.data.posts;
            //console.log(that.Tagnames)
          })
      },
      methods:{
          buhao:function () {
            let abc=''
            //获取搜索关键字
            abc=window.location.href;
            abc=abc.split("?")[1]
            abc=abc.split("=")[1]
            return abc
//            console.log(this.searchStr);
          }
      },
      data:function () {
           return{
             Tagnames:{},
             articles:{},
             posts:{}

           }
      }
    }
</script>

<style scoped>
  #search-all{
        background-color:rgb(244,244,244) ;
  }
      /*相关用户*/
      #user-list{
        width: 930px;
        height: 256px;
        display: flex;
        flex-wrap:wrap;
        justify-content: space-between;
        margin: 0 auto;
      }
        #user-info{
          width: 219px;
          height: 110px;
          flex-wrap: wrap;
          /*border: 1px solid red;*/
          margin-bottom: 18px;
          box-sizing: border-box;
          padding: 10px;
          border-radius: 4px;
          background-color: white;
        }
        #ult{
          padding-left: 8px;
          padding-right: 8px;
          overflow: hidden;
        }
      #ult span{
        font-size: 15px;
      }
          /*关注按钮*/
          #attention{
            font-size: 12px;
            padding: 3px 10px;
            color: #fff;
            background-color: #1fd7e2;
            float: right;
            vertical-align: middle;
          }
      #ulb{
        align-items: center;
        margin-left: 8px;
        margin-right: 8px;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #ececec;
        display: flex;
        justify-content: space-between;
        color: #a6a7a7;
        font-size: 14px;

      }
        /*用户头像*/
        #user-pic{
          width: 46px;
          height: 46px;
          border-radius: 50%;
          overflow: hidden;
        }
        /*相关ZUO标题*/
        header{
          width:930px;
          font-size: 20px;
          padding-top: 30px;
          padding-bottom: 30px;
          margin:0 auto;
          text-align: center;
          font-weight: 700;
        }
          /*相关阅读*/
  #user-articles{
    width: 930px;
    margin:0 auto;
    display: flex;
    justify-content: space-between;
  }
          #about-read{
            width: 219px;
            height: 180px;
            background-size:cover;
            padding-bottom: 18px;
            padding-left: 18px;
            padding-right: 18px;
            border-radius: 4px;
            padding-top: 60px;
          }
          #about-read a{
            font-size: 16px;
            line-height: 24px;
            color: #fff;

          }
        #about-read p{
          font-size: 12px;
          margin-top: 15px;
          color: rgba(255,255,255,.6);
          overflow: hidden;

                }
          /*相关用户阅读*/
          #about-users{
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            -webkit-box-pack: start;
            justify-content: space-between;
            width: 930px;
            margin:0 auto;
          }
          #about-user{
            display:inline-block;
            width: 219px;
            margin-bottom: 18px;
            /*margin-right: 18px;*/
            background-color: white;
            border-radius: 4px;
          }
         #from-user{
           padding: 12px 10px;
           font-size: 14px;
         }
  #from-user a{
    color: #272c2f;
  }
  #from-user span{
    color: #a6a7a7;
  }
  #tag-body{
        width: 199px;
        height: 50px;
        padding-top: 10px;
        padding-bottom: 10px;
        margin:0 auto;
        border-bottom: 1px solid #ececec;
  }
  #tag-color{
    display: inline-block;
    height: 8px;
    width: 8px;
    border-radius: 50%;
  }
  #tag-body span{
    font-size: 14px;
    color: #a6a7a7;
  }
  #tag-body a{
    color: #a6a7a7;
    font-size: 14px;
  }
  #feed-other-info{
    padding: 10px;
  }
</style>
