<script setup lang="ts">
import CommonLogo from '@/components/CommonLogo/index.vue'
import CommonNav from '@/components/CommonNav/index.vue'
</script>

<template>
  <div class="common-header-wrap">
    <div class="header">
      <CommonLogo/>

      <CommonNav/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.common-header-wrap {
  z-index:9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  background-color: $bg-white;

  .header {
    @include flex($justify: space-between);
    margin: 0 auto;
    max-width: 1296px;
    height: 100%;
  }
}
</style>
