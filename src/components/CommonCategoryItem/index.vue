<script setup lang="ts">
const props = defineProps<{
  title?: string
  count?: number
  background?: string
}>()
</script>

<template>
  <div
    class="comm-cate-item"
    :style="{ background: props.background || '#fff' }"
  >
    <div class="title">
      <span class="content">{{ props.title }}</span>
    </div>
    <div class="count-wrap">
      <i>1</i>
      <div class="count">{{ props.count }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.comm-cate-item {
  cursor: pointer;
  width: calc(100% / 3 - 8px);
  font-size: 22px;
  font-weight: 600;
  padding: 32px;
  @include border('border');;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-radius: 15px;
  color: var(--base-text-color-white);
  .content {
    transition: all 0.6s;
  }
  &:hover {
    .title {
      .content {
        display: block;
        transform: translateX(80%);
      }
      &::after {
        width: 100%;
      }
    }
  }
  .title {
    position: relative;
    margin-bottom: 16px;

    &::before {
      position: absolute;
      left: -10px;
      top: 2px;
      display: inline-block;
      content: '';
      width: 3px;
      height: 20px;
      background: var(--base-text-color-white);
    }
    &::after {
      position: absolute;
      left: -10px;
      bottom: -10px;
      display: inline-block;
      content: '';
      width: 0;
      height: 3px;
      background: var(--base-text-color-white);
      transition: var(--transition-normal);
    }
  }
  .count-wrap {
    display: flex;
    margin-left: -10px;
    .count {
      margin-left: 6px;
    }
  }
}
</style>
