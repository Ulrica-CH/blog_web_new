<script setup lang="ts">
defineProps<{ noPadding?: boolean }>()
</script>

<template>
  <div class="common-card" :style="{ padding: noPadding ? '0' : '20px' }">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.common-card {
  @include flex($align: flex-start, $direction: column);
  margin-bottom: 16px;
  padding: 20px 20px;
  background-color: var(--card-bg);
  color: var(--base-text-color-black);
  border-radius: var(--border-radius);
  transition: var(--transition-normal);
  border: var(--base-border);
  &:hover {
    border: var(--hover-border);
    transform: translateX(-10px);
  }
}
</style>
