<script setup lang="ts">
import homeNoticePage from './pages/homeNoticePage.vue';
import homeTopInfo from './pages/homeTopInfo.vue';
import homeMainPage from './pages/homeMainPage.vue';
</script>

<template>
    <div class="home">
        <!-- 公告 -->
        <homeNoticePage/>
        <!-- home 顶部信息 -->
        <homeTopInfo/>
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