<script setup lang="ts">
import CommonCard from '@/components/CommonCard/index.vue'
import { useAttrs, watch } from 'vue'
const attrs = useAttrs()
</script>

<template>
  <CommonCard>
    <div class="web-statistics">
      网站已运行：{{ attrs?.runtime }} 天
    </div>
  </CommonCard>
</template>

<style scoped lang="scss">
.web-statistics {
  color: var(--base-text-color-black);
}
</style>
