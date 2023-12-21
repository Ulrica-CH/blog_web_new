<script setup lang="ts">
import type { IConfig, IHomeGetStatistic } from '@/types'
import { useRouter } from 'vue-router'
const { infoCount,config } = defineProps<{ infoCount: IHomeGetStatistic,config:IConfig }>()
const router = useRouter()
const toPage = (path: string, type: string) => {
  router.push({ path, query:{type} })
}
</script>

<template>
  <div class="home-count-page animate__animated animate__fadeInBottom">
    <div class="count-item">
      文章
      <span class="value">{{ infoCount.articleCount }}</span>
    </div>
    <div class="count-item" @click="toPage('/articleList','category')">
      分类
      <span class="value">{{ infoCount.categoryCount }}</span>
    </div>
    <div class="count-item" @click="toPage('/articleList','tag')">
      标签
      <span class="value">{{ infoCount.tagCount }}</span>
    </div>
    <!-- <div class="count-item">
      友链
      <span class="value">0</span>
    </div> -->
    <!-- <div class="count-item">
      运行
      <span class="value">{{ config.view_time }}</span>
    </div>
    <div class="count-item">
      访问
      <span class="value">{{ config.view_time }}</span>
    </div> -->
  </div>
</template>

<style scoped lang="scss">
.home-count-page {
  width: 100%;
  height: 140px;
  padding: 0 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .count-item {
    @include flex();
    flex-direction: column;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    @include circleBorder('circleBorder');
    @include circleShadow('circleShadow');
    transition: var(--transition-normal);
    cursor: pointer;
    &:hover {
      transform: scale(1.02) translateY(10px);
    }
    .value {
      margin-top: 4px;
      font-size: 22px;
      color: var(--xy-main);
    }
  }
}
@media screen and (max-width: 768px) {
  .home-count-page {
    display: none;
  }
}
</style>
