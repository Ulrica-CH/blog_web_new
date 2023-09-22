<template>
  <div class="layout">
    <CommonHeader />
    <div class="main">
      <router-view></router-view>
    </div>
    <CommonFooter />
  </div>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/CommonHeader/index.vue'
import CommonFooter from '@/components/CommonFooter/index.vue'
</script>

<style scoped lang="scss">
.layout {
  height: 100vh;
  box-sizing: border-box;
  .main {
    margin: 60px auto 0;
    padding: 20px;
    // height: calc(100vh - 60px);
    box-sizing: border-box;
  }
  .main,
  .pc {
    max-width: 1200px;
  }
}
</style>
