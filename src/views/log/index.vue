<script setup lang="ts">
import { useLogData } from './hooks'
const [activities] = useLogData()
</script>

<template>
  <div class="log">
    <el-timeline>
      <template v-for="(item, index) in activities" :key="index">
        <el-timeline-item :timestamp="item.timestamp" placement="top">
          <el-card>
            <h4>{{ item.content }}</h4>
            <p>{{ item.timestamp }}</p>
          </el-card>
        </el-timeline-item>
      </template>
    </el-timeline>
  </div>
</template>

<style scoped lang="scss">
.log {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 18px;

  .el-timeline {
    width: var(--w-100-percent);
    .el-timeline-item {
      padding: 10px 0;
      :deep(.el-timeline-item__wrapper) {
        .el-card {
          border: none;
          padding: 10px;
          @include background_color('background_color');
          @include font_color('text-color');
          border-radius: 10px;

          @include cardShadow('shadow');
          color: #fff;
        }
      }
    }
  }
}
</style>
