<script setup lang="ts">
import CommonCard from '@/components/CommonCard/index.vue'
import CommonSvg from '@/components/CommonSvg/index.vue'
import wx from '@/assets/imgs/home/wx.jpg'
</script>

<template>
  <CommonCard>
    <div class="notice">
      <CommonSvg icon="renzheng" />
      <div> 有问题您可以添加<br/>wx:MichstaBe_XY_<br/>或者<br/>qq:210871791<br/>联系我</div>

      <!-- <el-image :src="wx" style="width: 100px; object-fit: contain" /> -->
    </div>
  </CommonCard>
</template>

<style scoped lang="scss">
.notice {
  @include flex();

}
</style>
