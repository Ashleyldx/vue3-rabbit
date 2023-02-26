import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import {resolve} from 'path'

import path from "path"  // 如果vite版本在3.0以上，需要使用ES6语法导入path
// const path=require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),vueSetupExtend(),
  //   Components({
  //   resolvers: [AntDesignVueResolver()],
  // }),
  ],
  server: {
    // 配置代理服务器，解决跨域
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true
      }
    }
  },
  // 配置路径别名
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'./src') // 配置@路径别名，方便导入模块
    }
  },
  // server:{
  //   port:3000,
  // }


})
