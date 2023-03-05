// 管理三个独立模块
import { createStore } from "vuex";
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

export default createStore({
    modules:{
        cart,
        user,
        category

  },
  // 配置插件
  plugins: [
    // 默认存储再localStorage里面
    createPersistedState({
      // 本地存储名字
      key: 'erabbit-client-pc-store',
      // 指定需要存储的模块
      paths: ['cart', 'user'],
      reducer(state) {
        return {
          user: {
            token:state.user.token // 只存储user模块中的token值
          }
        }
      },
      storage:''
    })
  ]
})


// import {createStore} from 'vuex'

// A模块

// B模块
// export default createStore({
//
// })

// 根模块vuex的使用用法
// vue2.0创建仓库 new Vuex.Store({})
// vue3.0创建仓库 createStore({})
// export default createStore({
//     state:{
//     username:'zhangsan'
//     },
//     getters:{
//       newName(state){
//           return state.username+'!!!!'
//       }
//     },
//     mutations:{
//         updateName(state){
//             state.username='lisi'
//         }
//     },
//     actions:{
//         updateName(ctx){
//          //发请求, 做异步操作
//             setTimeout(()=>{
//                 ctx.commit('updateName')
//             },100)
//         }
//     },
//     modules:{}
// })