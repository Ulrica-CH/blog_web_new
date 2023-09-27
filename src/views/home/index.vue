<script setup lang="ts">
import { onMounted } from 'vue'
import homeNoticePage from './pages/homeNoticePage.vue'
import homeMainPage from './pages/homeMainPage.vue'
import { useArticle, useRightCount, useRightConfig, useLoading } from './hooks'
import useLoadingStore from '@/store/loading'
const loadingState = useLoadingStore()
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

onMounted(async () => {
  loadingState.chnageLoading(true)
  await _homeGetStatistic()
  await _homeGetArticleList('init')
  await _homeGetConfig()
  loadingState.chnageLoading(false)
  // setTimeout(() => {
  //   loadingState.chnageLoading(false)
  // },200000)
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

<style lang="scss">
// .home {
//   width: 100%;
//   // overflow: hidden;
// }
</style>
