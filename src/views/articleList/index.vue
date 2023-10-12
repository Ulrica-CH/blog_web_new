<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import CommonCard from '@/components/CommonCard/index.vue'
import CommonSvg from '@/components/CommonSvg/index.vue'
import {
  getArticleListByTagId,
  getArticleListByCategoryId
} from '@/api/article'
import { getAllCategory } from '@/api/category'
import { getAllTag } from '@/api/tag'
import useLoadingStore from '@/store/loading'
const loadingState = useLoadingStore()

const router = useRouter()
const articleList = ref([])
const currentType = ref('')
const currentName = ref('')
const categoryList = ref([])
const tagsList = ref([])

const activeSwitch = ref(false)

const loading = ref(false)
let param = reactive({
  // 放置页码及相关数据
  current: 1, //当前页
  size: 10, //每页条目数
  id: ''
})
let total = ref(0) // 记录总数
let layout = 'prev, pager, next'

const getArticleListById = async (id: string) => {
  let res
  if (currentType.value == 'tag') {
    res = await getArticleListByTagId({ ...param, id })
  } else {
    res = await getArticleListByCategoryId({ ...param, id })
  }
  if (res) {
    articleList.value = res.list
    total.value = res.total
  }
}

const getCategoryList = async () => {
  let res = await getAllCategory()
  if (res) {
    categoryList.value = res.map((r: any) => {
      return {
        id: r.id,
        category_name: r.category_name
      }
    })
  }
}
const getTagsList = async () => {
  let res = await getAllTag()
  if (res) tagsList.value = res
}
onMounted(async () => {
  const { id, type, name } = router.currentRoute.value.query
  activeSwitch.value = type === 'category' ? false : true

  param.id = id
  currentType.value = type
  loadingState.chnageLoading(true)
  type === 'category' ? await getCategoryList() : await getTagsList()
  console.log(categoryList)
  if (name) {
    currentName.value = name
  } else {
    currentName.value =
      type === 'category'
        ? categoryList.value[0].category_name
        : tagsList.value[0].tag_name
  }
  const initId =
    type === 'category' ? categoryList.value[0].id : tagsList.value[0].id
  await getArticleListById(initId)
  loadingState.chnageLoading(false)
})

const onSwitchChange = async (val) => {
  loadingState.chnageLoading(true)
  if (val) {
    currentType.value = 'tag'
    await getTagsList()
    const id = tagsList.value[0].id
    currentName.value = tagsList.value[0].tag_name
    const res = await getArticleListById(id)

    if (res) {
      articleList.value = res.list
      total.value = res.total
    }
  } else {
    currentType.value = 'category'
    await getCategoryList()
    const id = categoryList.value[0].id
    currentName.value = categoryList.value[0].category_name
    const res = await getArticleListById(id)
    if (res) {
      articleList.value = res.list
      total.value = res.total
    }
  }
  loadingState.chnageLoading(false)
}
const onFilterItemChnage = async (id: string, name: string) => {
  loadingState.chnageLoading(true)
  currentName.value = name
  if (currentType.value === 'category') {
    await getArticleListById(id)
  } else {
    await getArticleListById(id)
  }
  loadingState.chnageLoading(false)
}
</script>

<template>
  <div class="article-list">
    <div class="switch-wrap">
      <el-switch
        v-model="activeSwitch"
        class="mb-2"
        active-text="标签相关"
        inactive-text="分类相关"
        @change="onSwitchChange"
      />
    </div>
    <div class="type-list">
      <div class="title">
        <span>{{ currentType === 'category' ? '分类' : '标签' }}</span>
        -
        <span>{{ currentName }}</span>
      </div>

      <div class="list">
        <div
          v-for="(item, index) in currentType === 'category'
            ? categoryList
            : tagsList"
          class="list-item"
          :class="{
            active:
              currentType === 'category'
                ? item.category_name === currentName
                : item.tag_name === currentName
          }"
          @click="
            onFilterItemChnage(
              item.id,
              currentType === 'category' ? item.category_name : item.tag_name
            )
          "
        >
          <CommonSvg :icon="currentType === 'category' ? 'category' : 'tag'" />
          {{ currentType === 'category' ? item.category_name : item.tag_name }}
        </div>
      </div>
    </div>

    <div class="article-wrap">
      <CommonCard v-for="(item, index) in articleList" :key="index">
        <div class="article-item">
          <div class="img-cover" v-image :data-src="item.article_cover">
            <el-image
              style="width: 100%; height: 100%"
              :src="item.article_cover"
              :fit="'fit'"
            >
              <template #error>
                <div class="image-slot">
                  <el-icon><icon-picture /></el-icon>
                </div>
              </template>
            </el-image>
          </div>
          <div class="title">{{ item.article_title }}</div>
          <div class="created-at">{{ item.createdAt }}</div>
        </div>
      </CommonCard>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-list {
  .type-list {
    .title {
      margin: 16px 0;
      font-size: 24px;
      font-weight: 600;
    }
    .list {
      display: flex;
      padding: 10px;
      .list-item {
        @include flex();
        // height: 40px;
        // width: 100px;
        background-color: #fff;

        margin: 0 16px 16px 0;
        padding: 20px;
        border-radius: var(--border-radius);
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
        box-shadow: var(--box-shadow);
        transition: var(--transition-normal);
        &:hover {
          box-shadow: var(--main-shadow);
        }
        &.active {
          background-color: var(--xy-main);
          color: #fff;
        }
      }
    }
  }
  .article-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .article-item {
      width: 300px;
      //   height: 240px;
      .img-cover {
        width: 100%;
        height: 140px;
      }
      .title {
        margin: 16px 0;
        font-size: 20px;
      }
    }
  }
}
</style>
