<script setup lang="ts">
import { onMounted } from 'vue'
import homeNoticePage from './pages/homeNoticePage.vue'
import homeMainPage from './pages/homeMainPage.vue'
import { useArticle, useRightCount, useRightConfig, useLoading } from './hooks'

defineProps<{ loading: Boolean }>()
const emits = defineEmits<{ onChangeLoading: [loading: boolean] }>()
defineOptions({ name: 'Home' })
/** 文章 */
const { articleList, isTopArticleList, articleTotal, _homeGetArticleList } =
  useArticle()
/** 右侧统计 */
const { infoCount, _homeGetStatistic } = useRightCount()
/** 网站配置 */
const { config, runtime, _homeGetConfig } = useRightConfig()
/** Loading */
const [changeLoadingStatus] = useLoading(emits)

onMounted(async () => {
  changeLoadingStatus(true)
  setTimeout(async () => {
    await _homeGetStatistic()
    await _homeGetArticleList('init')
    await _homeGetConfig()
    changeLoadingStatus(false)
  }, 2000)
})
</script>

<template>
  <div class="home">
    <!-- home 顶部信息 -->
    <homeNoticePage />
    <!-- 文章 侧边栏 -->
    <homeMainPage
      :infoCount="infoCount"
      :articleList="articleList"
      :isTopArticleList="isTopArticleList"
      :config="config"
      :runtime="runtime"
    />
  </div>
</template>
