<script setup lang="ts">
import { useTopInfoPage } from '../hooks'
const { leftBottomItem, toPath } = useTopInfoPage()
</script>

<template>
  <div class="home-top-info">
    <div class="item right">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-top-info {
  @include flex(space-between, _, column);
  margin-bottom: var(--margin-bottom-16);
  width: var(--w-100-persent);
  .item {
    height: 240px;
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
  }
  .right {
    background: var(--card-bg);
    border: var(--card-border);
    border-radius: var(--border-radius);
    transition: var(--transition-normal);
    cursor: pointer;
    &:hover {
      box-shadow: var(--main-shadow);
    }
    :deep(.el-carousel) {
      height: var(--h-100-percent);
      .el-carousel__container {
        height: 100% !important;
        .el-carousel__item {
          border-radius: var(--border-radius);
          background-color: var(--base-text-color-black);
        }
      }
    }
  }
}
</style>
