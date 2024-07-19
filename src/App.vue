<script lang="ts" setup>
import { onMounted } from 'vue';
import { isMobile } from './utils';

onMounted(() => {
  console.log(isMobile())
})
</script>

<template>
  <div class="app">
    
    <router-view></router-view>
  </div>
</template>
<style scoped lang="scss">
html,body,.app {
  width: 100vw;
  height: auto;
  // background-color: var(--bg-white);
  // background-color: #e5ebf5;
  background: linear-gradient(270deg, 
    rgba(36, 0, 0, 1) 0%, 
    rgba(9, 90, 121, 1) 100%, 
    rgba(0, 215, 255, 1) 100%);
}
</style>