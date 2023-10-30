<script setup lang="ts">
import { changeTheme } from '@/hooks'
const { isDark, handleChangeThemes } = changeTheme()
</script>

<template>
  <div class="comm-header-right">
    <el-switch
      v-model="isDark"
      @change="(value: boolean) => handleChangeThemes(value)"
    />
  </div>
</template>

<style scoped lang="scss">
.comm-header-right {
}
</style>
