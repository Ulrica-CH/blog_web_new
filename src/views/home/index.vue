<script setup lang="ts">
import { onMounted } from 'vue'
import homeNoticePage from './pages/homeNoticePage.vue'
import homeTopInfoPage from './pages/homeTopInfo.vue'
import homeMainPage from './pages/homeMainPage.vue'

import { useArticle, useRightCount } from './hooks/homeTopInfoPage'

/** 文章 */
const { articleList, articleTotal, _homeGetArticleList } = useArticle()
/** 右侧统计 */
const { _homeGetStatistic } = useRightCount()

onMounted(async () => {
  await _homeGetStatistic()
  await _homeGetArticleList('init')
})
</script>

<template>
  <div class="home">
    <!-- 公告 -->
    <homeNoticePage />
    <!-- home 顶部信息 -->
    <homeTopInfoPage />
    <!-- 文章 侧边栏 -->
    <homeMainPage :articleList="articleList" />
  </div>
</template>

<style scoped lang="scss"></style>
