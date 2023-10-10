<script setup lang="ts">
import CommonSvg from '@/components/CommonSvg/index.vue'
import CommonCard from '@/components/CommonCard/index.vue'
import CommonCol from '@/components/CommonCol/index.vue'

const {notice} = defineProps<{ notice: any }>()

</script>

<template>
  <CommonCol :xs="0" :sm="0" :lg="24" :xl="24">
    <CommonCard noPadding>
      <div class="home-notice-page">
        <CommonSvg icon="gonggao" class="notice-icon" />
        <div class="content">{{ notice.blog_notice }}</div>
      </div>
    </CommonCard>
  </CommonCol>
</template>

<style scoped lang="scss">
.home-notice-page {
  width: var(--w-100-percent);
  display: flex;
  align-items: center;
  padding: 20px 16px;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  @include border('border');
  transition: var(--transition-normal);
  &:hover {
    border: var(--hover-border);
    box-shadow: var(--main-shadow);
  }
  .notice-icon {
    animation: tran 1s;
    animation-iteration-count: infinite;
  }

  @keyframes tran {
    0% {
      -webkit-transform: rotate(-15deg);
      transform: rotate(-15deg);
    }
    4% {
      -webkit-transform: rotate(15deg);
      transform: rotate(15deg);
    }
    8%,
    24% {
      -webkit-transform: rotate(-18deg);
      transform: rotate(-18deg);
    }
    12%,
    28% {
      -webkit-transform: rotate(18deg);
      transform: rotate(18deg);
    }
    16% {
      -webkit-transform: rotate(-22deg);
      transform: rotate(-22deg);
    }
    20% {
      -webkit-transform: rotate(22deg);
      transform: rotate(22deg);
    }
    32% {
      -webkit-transform: rotate(-12deg);
      transform: rotate(-12deg);
    }
    36% {
      -webkit-transform: rotate(12deg);
      transform: rotate(12deg);
    }
    40%,
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
}
</style>
