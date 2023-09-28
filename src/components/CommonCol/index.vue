<script setup lang="ts">
const props = defineProps<{
  xs: number
  sm: number
  lg: number
  xl: number
  mr16?: boolean
}>()
</script>

<template>
  <el-col
    :lg="props.lg"
    :xs="props.xs"
    :xl="props.xl"
    :sm="props.sm"
    :style="{ marginRight: mr16 && '16px' }"
  >
    <slot />
  </el-col>
</template>

<style scoped lang="scss">
.el-col {
  max-width: 100%;
}
</style>
