<script setup lang="ts">
import CommonCard from '@/components/CommonCard/index.vue'
import { getAllTag } from '@/api/tag'
import { onMounted, ref } from 'vue'
import type { ITags } from '@/types'
const tagsList = ref<ITags[]>([])
const _getAllTag = async () => {
  tagsList.value = await getAllTag()
}
onMounted(async () => {
  await _getAllTag()
})
</script>

<template>
  <CommonCard>
    <div class="tags">
      <span v-for="(item, index) in tagsList" class="tag-item" :key="index">#{{
        item.tag_name
      }}</span>
    </div>
  </CommonCard>
</template>

<style scoped lang="scss">
.tags {
  display: flex;
  flex-wrap: wrap;
  .tag-item{
    margin: 2px;
    padding: 6px;
    @include border('border');;
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition-normal);
    &:hover{
      transform: scale(1.12);
      border-color: var(--xy-main);
    }
  }
}
</style>
