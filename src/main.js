import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VCharts from 'v-charts'
import './plugins/element.js'
// 导入全局样式表
import './assets/css/global.css'
// 导入字体图标
import './assets/fonts/iconfont.css'
// import axios from 'axios'

import { getRequest, postRequest, deleteRequest, putRequest } from './utils/api'

import { isNotNullORBlank } from './utils/utils'

// 将获取接口方法注册到vue属性上去
Vue.prototype.getRequest = getRequest
Vue.prototype.postRequest = postRequest
Vue.prototype.deleteRequest = deleteRequest
Vue.prototype.putRequest = putRequest
Vue.prototype.isNotNullORBlank = isNotNullORBlank

// 配置请求的根路径
// axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1/'
// Vue.prototype.$http = axios // 将axios挂载到http上
// Vue.config.productionTip = false

Vue.use(VCharts)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
