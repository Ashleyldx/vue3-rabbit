// 用于管理category模块的数据
import {defineStore} from 'pinia'
import request from "@/utils/request";

export default defineStore('category',{
    state:()=>({
        // money:100,
        list:[]
    }),
    actions:{
        async getAllCategory(){
            const res = await request.get('./home/category/head')
            console.log(res)
        }

    }
})
