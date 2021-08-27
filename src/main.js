import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
import echarts from 'echarts'
import JSONView from 'vue-json-viewer'
// import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';


Vue.prototype.$echarts = echarts

Vue.use(ElementUI);
//引入样式
// import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { 全局组件的默认选项 } */)
Vue.use(JSONView)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
