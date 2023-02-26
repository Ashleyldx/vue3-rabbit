import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'normalize.css' // 引入通用样式
import '@/assets/styles/common.less'
import router from './router'
// import store from './store/index'

const app=createApp(App)
// app.use(createPinia())

createApp(App).use(router).mount('#app')
