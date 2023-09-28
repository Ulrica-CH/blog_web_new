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
.app {
  width: 100vw;
  height: auto;
  background-color: var(--bg-white);
}
</style>