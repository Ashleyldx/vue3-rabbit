//统一管理所有模块
import useCategoryStore from './modules/category'

export default function useStore(){
    return {
        category:useCategoryStore()
    }
}










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