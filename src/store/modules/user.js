// 用户模块
// import {defineStore} from 'pinia'
// export default defineStore('category',{
//   state: () => ({
//     profile:{ //保存用户的登录信息
//       name:'',
//       avatar:'',
//       nickname:'',
//       mobile:'',
//       account:'',
//       token:''
//               }
//    }),
// })


export default ({  // 直接导出用户模块
    state(){
       return{
           // 保存用户的登录信息
           profile:{
               name:'',
               avatar:'',
               nickname:'',
               mobile:'',
               account:'',
               token:''
           }
       }
    },
    mutations:{
        // 修改用户信息，payload就是用户信息
        setUser(state,payload){
            state.profile=payload
        }
    }

})