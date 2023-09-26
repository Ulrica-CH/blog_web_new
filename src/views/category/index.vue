<script setup lang="ts">
import CommonCategoryItem from '@/components/CommonCategoryItem/index.vue'
import { reactive } from 'vue'

const list = reactive([
  {
    title: '分类',
    count: 10,
    background: 'linear-gradient(to right,#fbd786,#f7797d)'
  }
])
</script>

<template>
  <div class="catrgory">
    <div class="title">文章分类</div>

    <div class="list">
      <CommonCategoryItem
        v-for="(item, index) in list"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.catrgory {
  .title {
    font-size: 24px;
    margin-bottom: 16px;
  }
}
</style>
