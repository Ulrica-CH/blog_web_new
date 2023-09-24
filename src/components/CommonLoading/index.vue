<script setup lang="ts">
// withDefaults(defineProps<{ loading: Boorean }>(),{ loading: false })
</script>

<template>
  <div class="comm-loading">
    <div class="loading"></div>
  </div>
</template>

<style scoped lang="scss">
.loading {
  height: 100vh;
}
:deep(.el-loading-mask) {
  background-color: #f4f6fc !important;
}
</style>
