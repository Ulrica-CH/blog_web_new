<script setup lang="ts">
import CommonCol from '@/components/CommonCol/index.vue'
import type { IMainLeftPageProps } from '../props'
defineProps<IMainLeftPageProps>()
import AvatarInfo from '../components/AvatarInfo.vue'
import Notice from '../components/Notice.vue'
import Tags from '../components/Tags.vue'
import AnnualStatistics from '../components/AnnualStatistics.vue'
import WebsiteStatistics from '../components/WebsiteStatistics.vue'
</script>

<template>
  <CommonCol :xs="0" :sm="6" :lg="6" :xl="6">
    <div class="main-left-page animate__animated animate__fadeInLeft">
      <AvatarInfo v-bind="$attrs" :config="config" />

      <Notice />

      <Tags />

      <AnnualStatistics />

      <WebsiteStatistics v-bind="$attrs" />
    </div>
  </CommonCol>
</template>

<style scoped lang="scss">
.main-left-page {
  width: 94%;
  // margin-right: 20px;
}
</style>
