<script setup lang="ts">
defineProps<{ noPadding?: boolean; title?: string }>()
</script>

<template>
  <div class="common-card" :style="{ padding: noPadding ? '0' : '20px' }">
    <div v-if="title" class="title">{{ title }}</div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.common-card {
  @include flex($align: flex-start, $direction: column);
  margin-bottom: 16px;
  padding: 20px 20px;
  @include background_color('background_color');
  @include font_color('text-color');
  border-radius: var(--border-radius);
  transition: var(--transition-normal);
  @include border('border');
  height: auto;
  &:hover {
    border: var(--hover-border);
    transform: translateX(-10px);
  }
  .title {
    margin-bottom: 10px;
    padding: 6px 0;
    width: 100%;
    font-size: 24px;
    border-bottom: var(--base-border);
  }
}
</style>
