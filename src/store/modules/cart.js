// 购物车商品列表
// import {defineStore} from 'pinia'
// export default defineStore('category', {
//   namespaced:true,
//   state: () => ({
//     list:[]  // 输入商品列表默认为为空
//    }),
// })


export default ({  // 直接导出用户模块
  state(){
     return{
      list:[]  // 输入商品列表默认为为空
     }
  },
})