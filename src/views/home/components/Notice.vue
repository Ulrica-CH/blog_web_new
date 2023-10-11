<script setup lang="ts">
import CommonCard from '@/components/CommonCard/index.vue'
import CommonSvg from '@/components/CommonSvg/index.vue'
</script>

<template>
  <CommonCard> 
    
    <div class="notice">
     <CommonSvg icon="renzheng"/> 
     有问题您可以添加wx或者qq联系我
    </div>
    </CommonCard>
</template>

<style scoped lang="scss">
.notice {
  @include flex();
}
</style>
