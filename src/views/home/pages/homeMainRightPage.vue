<script setup lang="ts">
import CommonArticleItem from '@/components/CommonArticleItem/index.vue'
import { IMainRightPageProps } from './props'
defineProps<IMainRightPageProps>()
</script>

<template>
  <div class="main-right-page">
    <CommonArticleItem v-for="(item,index) in articleList" :article="item" :key="index"/>
  </div>
</template>

<style scoped lang="scss">
.main-right-page {
  flex: 1;
  @include flex($justify:space-between);
  flex-wrap:wrap;
  width:100%;
  // background-color: #fff;
}
</style>
