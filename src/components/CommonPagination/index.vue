<script setup lang="ts">
import { ref } from 'vue'

export interface IPagination {
  params: {
    current: number
    size: number
    total: number
  }
}
let { params } = defineProps<IPagination>()
// console.log(params.current, params.size, params.total)
const handleCurrentChange = (val: number) => {
  params.current = val
}
</script>

<template>
  <div class="comm-pagination">
    <el-pagination
      v-model:current-page="params.current"
      v-model:page-size="params.size"
      :background="true"
      layout="prev, pager, next, jumper"
      :total="params.total"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<style scoped lang="scss">
.comm-pagination {
  @include flex();
  width: 100%;
  padding: 20px;
  @include background_color('background_color');
  @include font_color('text-color');
  border-radius: 10px;

  @include cardShadow('shadow');
  :deep(.el-pagination) {
    .number,
    .btn-next,
    .btn-prev,
    .btn-quicknext,
    .el-input__inner {
      @include font_color('text-color');
      // border-radius: 10px;
      @include background_color('background_color');
      @include cardShadow('shadow');
    }
    .el-input__wrapper {
      background: transparent !important;
      border:none !important;
      box-shadow: none !important;
    }
  }
}
</style>
