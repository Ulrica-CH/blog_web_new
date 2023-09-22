<script setup lang="ts">
import { onMounted } from 'vue'
import homeNoticePage from './pages/homeNoticePage.vue'
import homeTopInfoPage from './pages/homeTopInfo.vue'
import homeMainPage from './pages/homeMainPage.vue'

import {
  useArticle,
  useRightCount,
  useRightConfig
} from './hooks'

/** 文章 */
const { articleList, articleTotal, _homeGetArticleList } = useArticle()
/** 右侧统计 */
const { infoCount, _homeGetStatistic } = useRightCount()
/** 网站配置 */
const { config, _homeGetConfig } = useRightConfig()

onMounted(async () => {
  await _homeGetStatistic()
  await _homeGetArticleList('init')
  await _homeGetConfig()
})
</script>

<template>
  <div class="home">
    <!-- 公告 -->
    <homeNoticePage />
    <!-- home 顶部信息 -->
    <homeTopInfoPage />
    <!-- 文章 侧边栏 -->
    <homeMainPage
      :infoCount="infoCount"
      :articleList="articleList"
      :config="config"
    />
  </div>
</template>

<style scoped lang="scss"></style>
./hooks