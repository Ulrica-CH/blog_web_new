<script setup lang="ts">
import {onMounted} from 'vue'
import homeNoticePage from './pages/homeNoticePage.vue';
import homeTopInfoPage from './pages/homeTopInfo.vue';
import homeMainPage from './pages/homeMainPage.vue';

import { homeGetStatistic } from '@/api/home'
import type { IHomeGetStatistic } from '@/types'

onMounted(async () => {
  const res:IHomeGetStatistic =  await homeGetStatistic()
})
</script>

<template>
    <div class="home">
        <!-- 公告 -->
        <homeNoticePage/>
        <!-- home 顶部信息 -->
        <homeTopInfoPage/>
        <!-- 文章 侧边栏 -->
        <homeMainPage/>
    </div>
</template>

<style scoped lang="scss">
.home{
    // @include flex();
    // color: $white-back;
}
</style>