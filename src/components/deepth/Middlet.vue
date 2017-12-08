<template>
         <div id="middlet">
           <header id="title">推荐阅读</header>
           <div id="flex-list">
              <div  id="art_pic" v-for="hot_art in hot_arts">
                <img :src="hot_art['banner']" alt="">
                <div id="flex-mask" >
                </div>
                <div id="body-inner">
                    <div id="item-body">
                      <a href="###" id="item-title">{{hot_art['title']}}</a>
                      <div id="item-summary">
                      {{hot_art['summary']}}
                    </div>
                    </div>
                  <div id="reco-info-inner">
                    <div id="tag-type">
                      <div id="type" :style="{backgroundColor:hot_art['sceneTagColor']}"></div>
                    <a href="###">{{hot_art['sceneTagName']}}</a>
                    </div>
                    <span>{{hot_art['timeAgo']}}</span>
                  </div>
                </div>
              </div>
           </div>
         </div>
</template>

<script>
  import axios from  'axios'
    export default {
        name: 'middlet',
      data:function(){
          return{
            hot_arts:{},
            arts:{},

          }
      },
      mounted:function () {
          let _this=this
        axios.get('api/hot_articles')
          .then(function (response) {
           //console.log(response.data)
            _this.hot_arts=response.data.hot_articles
          }),
          axios.get('api/articles')
            .then(function (response) {
             // console.log(response.data)
              _this.arts=response.data.articles
            })
      },
      methods: {
      }
    }
</script>

<style scoped>
        #middlet{
          margin-top:60px;
          /*height: 1000px;*/
          background-color: rgb(244,244,244);
        }
        /*标题*/
        #title{
          width: 930px;
          margin:0 auto;
          font-size: 20px;
          font-weight: 700;
          text-align: center;
          padding-top: 30px;
          padding-bottom: 30px;
        }
       #flex-list{
           width: 930px;
           display: flex;
          justify-content: space-between;
         margin:0 auto;
         }
        #art_pic{
          width: 298px;
          height: 452px;
          border-radius: 4px;
          position: relative;
        }
        #art_pic:hover #flex-mask{
          display: block;
        }


        #art_pic img{
          border-radius: 4px;
          width: 298px;
          height: 452px;
        }
        /*蒙版*/
        #flex-mask{
          width: 298px;
          height: 452px;
          background-color: rgba(0,0,0,.2);
          position: absolute;
          left: 0;
          top: 0;
          border-radius: 4px;
          display: none;
        }
        /*文字*/
        #body-inner{
          position: absolute;
          left: 0;
          bottom: 0;
          /*margin-bottom: 18px;*/
        }
        #item-body{
          margin-bottom: 18px;
          padding-left: 18px;
          padding-right: 18px;
        }
        #item-summary{
          font-size: 14px;
          font-weight: 400;
          color: rgba(255,255,255,.8);
          padding-top: 10px;
        }
        #item-title{
          font-size: 18px;
          color: #fff;
          font-weight: 700;
          line-height: 24px;
          margin-bottom: 10px;
          height: auto;
          text-decoration: none;
        }
  #reco-info-inner{
    display: flex;
    justify-content: space-between;
    padding: 15px 8px;
    border-top: 1px solid rgba(255,255,255,.2);
    margin-left: 10px;
    margin-right: 10px;
  }
  #reco-info-inner span{
    color: white;
    font-size: 12px;
    line-height: 22px;
  }
  #tag-type a{
    padding-left: 10px;
    color:rgba(255,255,255,.8);
    font-size: 14px;
    line-height: 22px;
    text-decoration: none;
  }
  #type{
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    text-decoration: none;
  }
</style>
