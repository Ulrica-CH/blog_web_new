<script setup lang="ts">
import { subRouter } from '@/router/subRouter'
</script>

<template>
  <div class="common-nav">
    <div class="nav-item" v-for="(item, index) in subRouter" :key="index">
      <el-icon size="18">
        <component :is="item.mate.icon" />
      </el-icon>
      <span class="title"> {{ item.mate.title }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.common-nav {
  @include flex();
  font-size: 18px;
  .nav-item {
    @include flex();
    margin: 0 4px;
    padding: 10px;
    border-radius: $border-radius-10;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      // background-color: $hover-color;
      // color: $text-color-white;
      @include hoverCommStyle();
    }
    .title {
      margin-left: 4px;
    }
  }
}
</style>
