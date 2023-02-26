import { createRouter, createWebHashHistory } from 'vue-router'
import layout from '../views/layout/index.vue'
const router=createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: layout
        },
        // login页面
        {
            path:'/login',
            component:()=>import('../views/login/index.vue')
        },
        // home页面
        {
            path:'/home',
            component:()=>import('../views/home/index.vue')
        }

    ]
})
export default router