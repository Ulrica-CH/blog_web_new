<script setup lang="ts">
import homeMainLeftPage from './homeMainLeftPage.vue';
import homeMainRightPageVue from './homeMainRightPage.vue';
</script>


<template>
  <div class="home-main-page"> 
    <homeMainLeftPage/>
    <homeMainRightPageVue/>
    </div>
</template>

<style scoped lang="scss"> 
.home-main-page{
    display: flex;
}
</style>