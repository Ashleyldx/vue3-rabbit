<script lang="ts" setup>
import leftClass from './components/leftClass.vue'
import bannerScroll from './components/bannerScroll.vue'

</script>

<template>
  <div class="pageHome">
    <div class="homeEntry">
      <div class="homeContainer">
<!--        左侧分类-->
      <leftClass></leftClass>
<!--        banner轮播图-->
      <bannerScroll></bannerScroll>
    </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.pageHome{
  //background-color: yellow;
}
//.homeEntry{
//  background-color: red;
//}
.homeContainer{
  //background-color: red;
}


</style>