// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// px2rem 自适应
import 'lib-flexible'

// 引入全局样式
import './assets/css/index.css'


// 引入echarts
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts



import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 1.全局 install
import scroll from 'vue-seamless-scroll'
Vue.use(scroll)


//引入v-viewer
//注册
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// 使用 
Vue.use(Viewer);


// 引入 Vueditor
import Vuex from 'vuex'
import Vueditor from 'vueditor'

import 'vueditor/dist/style/vueditor.min.css'

// your config here
let config = {
  toolbar: [
    'removeFormat', 'undo', '|', 'elements', 'fontName', 'fontSize', 'foreColor', 'backColor', 'divider',
    'bold', 'italic', 'underline', 'strikeThrough', 'links', 'divider', 'subscript', 'superscript',
    'divider', 'justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull', '|', 'indent', 'outdent',
    'insertOrderedList', 'insertUnorderedList', '|', 'picture', 'table', '|', 'switchView'
  ],
  fontName: [
    { val: 'arial black' },
    { val: 'times new roman' },
    { val: 'Courier New' }
  ],
  fontSize: [
    '12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px', '36px'
  ],
  uploadUrl: '',
  id: '',
  classList: []

};

Vue.use(Vuex);
Vue.use(Vueditor, config);








Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


