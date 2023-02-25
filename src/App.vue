<script lang="ts" setup>
import request from './utils/request'
const test = async()=>{
  const res=await request.get('./home/index')
  console.log(2222,res)
}
test()
</script>

<template>
  <div>
    <router-view />

  </div>
</template>

<style lang="less" scoped>
// 必须导入variables.less
//@import '@/assets/styles/variables.less';
//@import '@/assets/styles/mixins.less';
h1 {

}
</style>
