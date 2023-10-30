<script setup lang="ts">
import CommonCategoryItem from '@/components/CommonCategoryItem/index.vue'
import { reactive, ref, onMounted } from 'vue'
import { getAllCategory } from '@/api/category'
import useLoadingStore from '@/store/loading'
const loadingState = useLoadingStore()
const categoryList = ref([])
const list = reactive([
  {
    title: '分类',
    count: 10,
    background: 'linear-gradient(to right,#fbd786,#f7797d)'
  }
])

const randomFontColor = () => {
  return `rgb(${Math.random() * 180 + 30},${Math.random() * 180 + 30},${
    Math.random() * 180 + 30
  })`
}

const randomFontSize = () => {
  return Math.random() * 1.6 + 0.6
}

const getCategoryList = async () => {
  loadingState.chnageLoading(true)
  let res = await getAllCategory()

  if (res) {
    categoryList.value = res.map((r: any) => {
      return {
        id: r.id,
        category_name: r.category_name,
        fontSize: randomFontSize(),
        fontColor: randomFontColor(),
        background: 'linear-gradient(to right,#fbd786,#f7797d)'
      }
    })
  }
  loadingState.chnageLoading(false)
}

onMounted(() => {
  getCategoryList()
})
</script>

<template>
  <div class="catrgory">
    <div class="title">文章分类</div>

    <div class="list">
      <CommonCategoryItem
        v-for="(item, index) in categoryList"
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
  .list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-content: center;
  }
}
</style>
