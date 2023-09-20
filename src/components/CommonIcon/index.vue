<script setup lang="ts">
import type { ICommIcon } from './propsTypes'
defineProps<ICommIcon>()
</script>

<template>
  <el-icon :size="size" :color="color">
    <component :is="icon" />
  </el-icon>
</template>

