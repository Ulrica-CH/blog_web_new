<script setup lang="ts">
import homeMainLeftPage from './homeMainLeftPage.vue';
import homeMainRightPageVue from './homeMainRightPage.vue';
import { IMainPageProps } from '../props'
const props = defineProps<IMainPageProps>()
</script>


<template>
  <div class="home-main-page"> 
    <homeMainLeftPage v-bind="$attrs" :config="config"/>
    <!-- <homeMainLeftPage :config="config"/> -->
    <homeMainRightPageVue :articleList="articleList" :isTopArticleList="isTopArticleList"/>
    
    </div>
</template>

<style scoped lang="scss"> 
.home-main-page{
    display: flex;
}
</style>