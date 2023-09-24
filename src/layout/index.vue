<template>
  <div class="layout">
    <CommonHeader />
    <div class="main">
      <router-view
        v-loading="loading"
        :loading="loading"
        @onChangeLoading="onChangeLoading"
      ></router-view>
    </div>
    <CommonFooter />

    <router-view
      v-if="loading"
      :loading="loading"
      @onChangeLoading="onChangeLoading"
    ></router-view>
  </div>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/CommonHeader/index.vue'
import CommonFooter from '@/components/CommonFooter/index.vue'
import { useLoading } from './hooks'
const [loading, onChangeLoading] = useLoading()
</script>

<style scoped lang="scss">
.layout {
  box-sizing: border-box;
  .main {
    margin: 60px auto 0;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f4f6fc;
  }
  .main,
  .pc {
    max-width: 1200px;
  }
}
</style>
