<script setup lang="ts">
import {IMainLeftPageProps} from '../props'
defineProps<IMainLeftPageProps>()
import AvatarInfo from '../components/AvatarInfo.vue'
import Notice from '../components/Notice.vue'
import Tags from '../components/Tags.vue'
import AnnualStatistics from '../components/AnnualStatistics.vue'
import WebsiteStatistics from '../components/WebsiteStatistics.vue'
</script>

<template>
  <div class="main-left-page">
    <AvatarInfo v-bind="$attrs" :config="config" />

    <Notice/>

    <Tags/>

    <AnnualStatistics/>

    <WebsiteStatistics v-bind="$attrs"/>
  </div>
</template>

<style scoped lang="scss">
.main-left-page {
  width: 300px;
  margin-right: 20px;
}
.main-left-page,
.pc {
  min-width: 300px;
}
</style>
