/**
 * Created by QCL on 2017/5/18.
 */
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
//multi-page-webpack-vue
//vue init QC-L/webpack-multi-page-template multi-page-webpack-vue

// vue init            模板名                        项目名
//QC-L/webpack-multi-page-template 是模板名

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
