<script lang="ts" setup>
import request from './utils/components/request'
const fn = () => {
  // 测试请求
  request('/member/profile','get')
}
</script>

<template>
  <div>
app <button @click="fn">测试request工具函数</button>
  </div>
</template>

<style lang="less" scoped>


</style>
