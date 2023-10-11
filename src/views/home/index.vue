<script setup lang="ts">
import { onMounted } from 'vue'
import homeNoticePage from './pages/homeNoticePage.vue'
import homeCountPage from './pages/homeCountPage.vue'
import homeMainPage from './pages/homeMainPage.vue'
import { useArticle, useRightCount, useRightConfig, useLoading } from './hooks'
import useLoadingStore from '@/store/loading'
const loadingState = useLoadingStore()
defineOptions({ name: 'Home' })
/** 文章 */
const { articleList, params, isTopArticleList, _homeGetArticleList } =
  useArticle()
/** 右侧统计 */
const { infoCount, _homeGetStatistic } = useRightCount()
/** 网站配置 */
const { config, runtime, _homeGetConfig } = useRightConfig()

onMounted(async () => {
  loadingState.chnageLoading(true)
  await _homeGetStatistic()
  await _homeGetArticleList('init')
  await _homeGetConfig()
  loadingState.chnageLoading(false)
})
</script>

<template>
  <div class="home">
    <homeCountPage :infoCount="infoCount"/>
   
    <!-- home 顶部信息 -->
    <homeNoticePage :notice="config" />
    <!-- 文章 侧边栏 -->
    <homeMainPage
      :infoCount="infoCount"
      :articleList="articleList"
      :isTopArticleList="isTopArticleList"
      :config="config"
      :runtime="runtime"
      :params="params"
    />
  </div>
</template>

<style lang="scss">

</style>
