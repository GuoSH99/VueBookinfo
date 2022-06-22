import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';//element-ui 不能写错，是组 件名称。这里引入的是 js 文件，还要单独引入 css 文件
import 'element-ui/lib/theme-chalk/index.css';//index.css 这个文 件当然在项目下的相应目录下有的 
import './permission'
import dataV from '@jiaminghi/data-view'
import *as echarts from 'echarts'

Vue.config.productionTip = false;//含义： 意思是当前处于开发阶段，无需显示生产模式提示的信息，若不设置 （即为 true），浏览器会做出提示
Vue.use(ElementUI);//指明要使用 ElementUI 组件了
Vue.use(dataV);


new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
