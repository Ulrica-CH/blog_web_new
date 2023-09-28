<script setup lang="ts">
import CommonIcon from '@/components/CommonIcon/index.vue'
import { useToggleLogo } from './hooks'
import { useRouter } from 'vue-router'
const router = useRouter()
const { showIcon, mouseenter, mouseout } = useToggleLogo()
</script>

<template>
  <div
    class="common-logo"
    @mouseenter="mouseenter"
    @mouseout="mouseout"
    @click="router.push('/home')"
  >
    <span class="title" v-if="!showIcon">MichstaBe</span>

    <span v-else class="icon">
      <CommonIcon icon="HomeFilled" size="30" />
    </span>
  </div>
</template>

<style scoped lang="scss">
.common-logo {
  @include flex();
  width: 120px;
  padding: 10px 0;
  border-radius: var(--border-radius);
  cursor: pointer;
  transition: var(--transition-normal);

  &:hover {
    background-color: var(--xy-main);
    color: var(--base-text-color-white);
  }
  .title {
    @include flex();
    font-size: 24px;
  }
  .icon {
    @include flex();
  }
}
@media screen and (max-width: 768px) {
  .common-logo {
    display: none;
  }
}
</style>
