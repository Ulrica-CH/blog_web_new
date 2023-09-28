<script setup lang="ts">
import homeMainLeftPage from './homeMainLeftPage.vue'
import homeMainRightPageVue from './homeMainRightPage.vue'
import type { IMainPageProps } from '../props'
const props = defineProps<IMainPageProps>()
</script>

<template>
  <div class="home-main-page">
    <homeMainLeftPage v-bind="$attrs" :config="config" />

    <homeMainRightPageVue
      v-bind="$attrs"
      :params="props.params"
      :articleList="articleList"
      :isTopArticleList="isTopArticleList"
    />
  </div>
</template>

<style scoped lang="scss">
.home-main-page {
  display: flex;
  width: 100%;
  // overflow: hidden;
}
</style>
