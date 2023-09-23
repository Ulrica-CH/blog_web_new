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

  .el-timeline {
    width: var(--w-100-percent);
    .el-timeline-item {
      padding: 10px 0;
      :deep(.el-timeline-item__wrapper) {
        .el-card {
          padding: 10px;
          background: linear-gradient(
            120deg,
            rgba(91, 39, 255, 1) 0%,
            rgba(0, 212, 255, 1) 100%
          );
          color: #fff;
        }
      }
    }
  }
}
</style>
