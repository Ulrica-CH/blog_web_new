<script setup lang="ts">
import CommonIcon from '@/components/CommonIcon/index.vue'
import {useToggleLogo} from './hooks'
const { showIcon, mouseenter, mouseout } = useToggleLogo()
</script>

<template>
  <div class="common-logo" @mouseenter="mouseenter" @mouseout="mouseout">
    <span class="title" v-if="!showIcon">Logo</span>
    <span v-else class="icon">
      <CommonIcon icon="HomeFilled" size="30"/>
    </span>
  </div>
</template>

<style scoped lang="scss">
.common-logo {
  width: 100px;
  padding: 10px 0;
  border-radius: var(--border-radius);

  cursor: pointer;
  transition: var(--transition-normal);

  &:hover {
    background-color: var(--hover-color);
    color: var(--text-color-white);
  }
  .title {
    @include flex();
    font-size: 24px;
  }
  .icon{
    @include flex();
  }
}
</style>
