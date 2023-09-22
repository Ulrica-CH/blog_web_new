<script setup lang="ts"></script>

<template>
  <div class="common-card">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.common-card {
  @include flex($align:flex-start,$direction: column);
  margin-bottom:16px;
  padding: 20px 20px;
  background-color: $card-bg;
  border-radius: $border-radius;
  box-sizing: border-box;
}
</style>
