<script setup lang="ts">
import AvatarInfo from '../components/AvatarInfo.vue'
</script>

<template>
  <div class="main-left-page">
    <AvatarInfo />
  </div>
</template>

<style scoped lang="scss">
.main-left-page {
  width: 300px;
  margin-right: 20px;
  // background-color: #fff;
}
.main-left-page,
.pc {
  min-width: 300px;
}
</style>
