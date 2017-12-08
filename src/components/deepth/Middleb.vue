<template>
              <div id="middleb">
               <header>更多文章</header>
                <div id="flex-list">
                      <div v-for="art in mores"  id="more" :style="{backgroundImage:'url('+art['banner']+')'}">
                        <a href="###" id="more-a">
                        </a>
                        <div id="item-body">
                          <a href="###" id="item-title">
                            {{art['title']}}
                          </a>
                          <div id="item-info">
                          <span>ZUO先生</span>
                          <span>{{art['timeAgo']}}</span>
                          </div>
                        </div>

                      </div>
                </div>
              </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: 'middelb',
      mounted:function () {
        let _this=this
        axios.get('api/articles')
          .then(function (response) {
            //console.log(response.data)
            _this.mores=response.data.articles;
          })
      },
      data:function () {
        return{
          mores:{}
        }
      }
    }
</script>

<style scoped>
        #middleb{
            background-color: rgb(244,244,244);
          padding-bottom: 20px;
        }
        header{
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
          height: 990px;
          margin:0 auto;
          background-color: rgb(244,244,244);
          display: flex;
          flex-wrap:wrap;
          justify-content: space-between;

        }
        #more{
          width: 219px;
          height: 312px;
          background-color: white;
          border-radius: 4px;
          background-size:cover;
        }
        #more-a{
          width: 219px;
          height: 162px;
          display:block;
          }
        #item-body{
          background-color: white;
          width: 219px;
          height: 150px;
          border-bottom-left-radius: 4px;
          border-bottom-right-radius: 4px;
          padding: 15px;
        }
        #item-title{
          display: block;
          width: 189px;
          height: 105px;
          font-size: 14px;
          color: #272c2f;
          line-height: 20px;
          text-decoration: none;
        }
  #item-info{
    display: flex;
    justify-content: space-between;
  }
  #item-info span{
    font-size: 12px;
    color: #272c2f;
  }
  #item-info span:last-child{
    color:#a6a7a7;
  }
</style>
