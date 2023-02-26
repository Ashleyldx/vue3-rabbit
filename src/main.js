import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'normalize.css'
import 'ant-design-vue/dist/antd.css';
import Antd from "ant-design-vue";
// import './assets/styles/common.less'
import router from './router'
// Vue.use(Antd)

const app = createApp(App)
app.use(router)
app.mount('#app')
