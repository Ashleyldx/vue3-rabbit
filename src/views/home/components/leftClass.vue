<script lang="ts" setup name="Layout">
import category from '@/store/modules/category.js'
const {cateGory} = useStore() // cateGory要解构出来
</script>
<template>
  <div class="homeCategory">
    <ul class="menu">
<!--      <li v-for="i in 10" :key="i">-->
      <li v-for="item in cateGory.list" :key="item.id">
        <routerLink to="/">居家</routerLink>
        <routerLink to="/">洗漱</routerLink>
        <routerLink to="/">清洁</routerLink>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.homeCategory {
  //display: flex;
  width: 250px;
  height: 550px;
  background: rgba(0, 0, 0, 0.8);
  position: absolute;
  //margin-left: 1px;
  z-index: 99;
  .menu {
    li {
      padding-left: 35px;
      height: 55px;
      line-height: 55px;
      &:hover {
        //background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
}
</style>