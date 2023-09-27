<script setup lang="ts">
const props = defineProps<{ icon: string }>()
</script>

<template>
  <svg class="icon">
    <use :xlink:href="'#icon-' + props.icon" />
  </svg>
</template>
