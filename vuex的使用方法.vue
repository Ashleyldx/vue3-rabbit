<script lang="ts" setup>
import request from './utils/request'
// import {useStore} from 'vuex'

// const test = async()=>{
//   const res=await request.get('./home/index')
// }
// test()

// const store =useStore()
// const mutationsFn=()=>{
//   // 2.3 提交B模块的修改
//   store.commit('moduleB/updateName')
//
// }

const actionsFn=()=>{}


</script>

<template>
  <div>
    <router-view />

<!--&lt;!&ndash;    1.1 使用A模块的state数据&ndash;&gt;-->
<!--    <p>{{$store.state.moduleA.username}}</p>-->
<!--&lt;!&ndash;    1.2 使用A模块的getters数据&ndash;&gt;-->
<!--    <p>{{$store.getters.newName}}</p>-->

<!--&lt;!&ndash;    2.1 使用B模块的state数据&ndash;&gt;-->
<!--    <p>{{$store.getters.newName}}</p>-->
<!--&lt;!&ndash;    2.2 使用B模块的getters数据&ndash;&gt;-->
<!--    <p>{{$store.getters['moduleB/newName']}}</p>-->
<!--    <button @click="mutationsFn">mutationsFN</button>-->
<!--    <button @click="actionsFn">actionsFn</button>-->
  </div>
</template>

<style lang="less" scoped>


</style>
