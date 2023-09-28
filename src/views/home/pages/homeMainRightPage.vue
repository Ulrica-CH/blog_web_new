<script setup lang="ts">
import CommonArticleItem from '@/components/CommonArticleItem/index.vue'
import homeTopInfoPage from './homeTopInfo.vue'
import type { IMainRightPageProps } from '../props'
import CommonPagination from '@/components/CommonPagination/index.vue'
const props = defineProps<IMainRightPageProps>()
</script>

<template>
  <div class="main-right-page animate__animated animate__fadeInRight">
    <homeTopInfoPage :isTopArticleList="isTopArticleList"/>
    <div class="article-wrap">
      <CommonArticleItem
        v-for="(item, index) in articleList"
        :article="item"
        :index="index"
        :key="index"
      />
    </div>

    <CommonPagination v-model:params="props.params"/>
  </div>
</template>

<style scoped lang="scss">
.main-right-page {
  flex: 1;
  @include flex(space-between, _, column);
  flex-wrap: wrap;
  // width: var(--w-100-persent);
  .article-wrap {
    @include flex(space-between);
    flex-wrap: wrap;
    // width: var(--w-100-persent);
  }
}
</style>
