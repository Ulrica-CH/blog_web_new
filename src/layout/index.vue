<template>
  <div class="layout">
    <CommonHeader />
    <div class="main">
      <!-- <CommonLoading v-if="loading" v-loading="loading"/>
      <router-view
      v-if="loading"
        :loading="loading"
        @onChangeLoading="onChangeLoading"
      ></router-view>-->
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
import { ref } from 'vue'
import CommonHeader from '@/components/CommonHeader/index.vue'
import CommonFooter from '@/components/CommonFooter/index.vue'
import CommonLoading from '@/components/CommonLoading/index.vue'
const loading = ref(false)
const onChangeLoading = (flag: boolean) => {
  console.log(flag)
  loading.value = flag
}
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
