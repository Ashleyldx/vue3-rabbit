<script lang="ts" setup>
import request from './utils/request'
import {useStore} from 'vuex'
const test = async()=>{
  const res=await request.get('./home/index')
  // console.log(2222,res)
}
test()


// 使用vuex仓库数据
const store =useStore()
// 1、使用根模块state的数据
console.log(store.state.username)
// 2、使用根模块getters的数据
console.log(store.getters.newName)
const mutationsFn=()=>{
  // 3、提交根模块mutations函数
  // store.commit('updateName')
  // 调用根模块actions函数
  store.dispatch('updateName')
}



</script>

<template>
  <div>
    <router-view />

<!--    1、使用根模块的state数据-->
    <p>{{$store.state.username}}</p>
<!--    2、使用根模块的getters数据-->
    <p>{{$store.getters.newName}}</p>
<!--    3、使用根模块的mutations数据-->
    <button @click="mutationsFn"> mutationsFn</button>
<!--点击button时state和getters里面的数据都会被修改-->

  </div>
</template>

<style lang="less" scoped>
// 必须导入variables.less
//@import '@/assets/styles/variables.less';
//@import '@/assets/styles/mixins.less';
h1 {

}
</style>
