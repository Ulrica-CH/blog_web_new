<script setup lang="ts">
import { ref, watch, reactive, h } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { useLoading } from '@/hooks/index'
import { storeToRefs } from 'pinia'
import { IArticle } from '@/types'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import {
  getArticleById,
  //   getRecommendArticleById,
  readingDuration
  //   articleLike,
  //   cancelArticleLike,
} from '@/api/article'
import useLoadingStore from '@/store/loading'
const loadingState = useLoadingStore()
defineProps<{ loading: Boolean }>()
const emits = defineEmits<{ onChangeLoading: [loading: boolean] }>()
const [changeLoadingStatus] = useLoading(emits)
const MdCatalog = MdEditor.MdCatalog
let setUpTimes = null
let lastArticleId = null

const router = useRouter()
const route = useRoute()
const currentUrl = window.location.href
const isLike = ref(false)

// 模仿获取md文档信息
const mdState = reactive({
  text: '',
  id: 'my-editor',
  switch: true
})

const articleInfo = ref({})
const scrollElement = document.documentElement
// 移动端目录是否可见
const drawerShow = ref(false)

// 文章详情
const getArticleDetails = async (id: number) => {
  let res = await getArticleById({ id })
  mdState.text = res.article_content
  articleInfo.value = res
  if (res.code == 0) {
    mdState.text = res.article_content
    articleInfo.value = res
  }
}

// 返回本次浏览时长
const addReadingDuration = async (id) => {
  const now = new Date()
  let duration = now - setUpTimes
  await readingDuration(id, duration)
}

const init = async (id) => {
  loadingState.chnageLoading(true)
  await getArticleDetails(id)
  // await addReadingDuration(lastArticleId)
  loadingState.chnageLoading(false)
}
watch(
  () => route,
  (newV) => {
    if (newV.path == '/article' && newV.query.id) {
      setUpTimes = new Date()
      lastArticleId = newV.query.id
      init(newV.query.id)
    }
  },
  {
    immediate: true,
    deep: true
  }
)
const getImg = () => {
  return `url(${articleInfo.value.article_cover})`
}
</script>

<template>
  <!-- <PageHeader :article="articleInfo" /> -->
  <div class="article" :style="{ height: loading ? '860px' : 'auto' }">
    <el-row class="article_box">
      <el-col :xs="24" :sm="18" class="left">
        <div
          v-if="!loading"
          class="header-info"
          :style="{ backgroundImage: getImg() }"
        >
          <div class="title">{{ articleInfo?.article_title }}</div>
          <div class="category comm-item">{{ articleInfo?.categoryName }}</div>

          <div class="tags-wrap comm-item">
            <span
              v-for="(item, index) in articleInfo?.tagNameList"
              :key="index"
              class="tag"
            >
              #{{ item }}
            </span>
          </div>
          <div class="time-wrap">
            <span class="create-time comm-item"
              >发表于：{{ articleInfo?.createdAt }}</span
            >
            <span class="update-time comm-item"
              >修改于：{{ articleInfo?.updatedAt }}</span
            >
          </div>

          <div class="">
            <span class="view-times comm-item"
              >观看次数：{{ articleInfo?.view_times }}</span
            >
            <span class="reading_duration comm-item"
              >阅读时长：{{ articleInfo?.reading_duration }}</span
            >
          </div>
        </div>
        <el-card class="md-preview">
          <MdEditor
            class="md-preview-v3"
            v-model="mdState.text"
            :editorId="mdState.id"
            :previewOnly="true"
          ></MdEditor>
        </el-card>
      </el-col>
      <el-col :xs="0" :sm="6">
        <el-affix :offset="53" style="width: inherit">
          <el-card
            v-if="!loading"
            class="catalogue-card card-hover"
            header="目录"
          >
            <div class="catalogue-card__box">
              <MdCatalog
                :editorId="mdState.id"
                :scroll-element="scrollElement"
              />
            </div>
          </el-card>
        </el-affix>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.article {
  .article_box {
    display: flex;
    flex-wrap: nowrap;

    .left {
      margin-right: 16px;
    }
  }

  .header-info {
    position: reactive;
    // @include flex($direction:column);
    padding: 20px;
    width: var(--width-100-persent);
    height: 320px;

    background-size: cover;
    background-repeat: no-repeat;

    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    .title {
      margin: 80px 0 40px 0;
      font-size: 28px;
      color: var(--base-text-color-white);
    }
    .category {
      @include positionA(20px, none, none, 20px);
    }
    .tags-wrap {
      @include positionA(20px, none, none, 140px);
      color: var(--base-text-color-white);
    }
    .time-wrap {
      margin-bottom: 36px;
      .update-time {
        margin-left: 16px;
      }
    }
    .comm-item {
      padding: 10px;
      // background: rgba(255,255,255,.2);
      // background: var(--main);
      background: var(--article-comm-item-bgc);
      color: #fff;
      border-radius: var(--border-radius);
      opacity: 0.8;
    }
    .reading_duration {
      margin-left: 16px;
    }
  }
  .md-preview {
    padding: 0 10px;
  }
}

.catalogue-card {
  margin-top: 1rem;
  padding: 1rem 0.5rem;

  &__box {
    scrollbar-width: none;
    overflow: auto;
    max-height: calc(100vh - 23.1rem);
    cursor: pointer;
  }
}

.mobile-catalog {
  padding: 2rem;
  max-height: 400px;
  scrollbar-width: none;
  overflow-y: auto;
  cursor: pointer;
}

.theme-card {
  padding: 1rem 0.5rem;
}

.command {
  padding: 1rem 0.5rem;

  &-box {
    max-height: 160px;
    scrollbar-width: none;
    overflow-y: auto;
    cursor: pointer;

    &::-webkit-scrollbar {
      display: none;
      /* Chrome Safari */
    }

    &-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0.3rem;
      color: var(--font-color);

      &__img {
        margin-right: 1rem;
        width: 50px;
        height: 40px;
      }
    }
  }
}

.icon-sort {
  font-size: 1.8rem;
  color: var(--font-color);
}

.recommend {
  box-sizing: border-box;
  position: relative;
  padding: 2rem;

  &-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 50%;
    height: 100%;
    overflow: hidden;
    color: #fff;
    transition: scale 0.5s;
    cursor: pointer;

    &:hover {
      .recommend-box-img {
        scale: 1.2;
      }
      .recommend-box-item {
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    &-img {
      transition: all 0.5s;
      width: 100%;
      height: 100%;
    }

    &-item {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: center;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      font-size: 1.2rem;
      line-height: 1.8;
      transition: all 0.5s;
      background-color: rgba(0, 0, 0, 0.7);

      i {
        font-size: 1.4rem;
      }
    }

    .prev {
      padding-left: 2rem;
      align-items: flex-start;

      div {
        box-sizing: border-box;
        max-width: 10rem;
        font-size: 1rem;
        margin-left: 1rem;
      }
    }

    .next {
      padding-right: 2rem;
      align-items: flex-end;

      div {
        box-sizing: border-box;
        max-width: 10rem;
        font-size: 1rem;
        margin-right: 1rem;
      }
    }
  }
}

.like {
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-icon1 {
    font-size: 1.8rem;
    transition: all 0.3s;
    &:hover {
      scale: 1.1;
    }
  }
}

.is-like {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary);
  .icon-icon1 {
    font-size: 1.8rem;
    color: var(--primary);
  }
}

.mobile-recommend {
  position: relative;
  .recommend-title {
    position: absolute;
    top: 0;
    left: 2.2rem;
    font-size: 1.2rem;
    font-weight: 600;
    color: var(--font-color);
  }
  .card {
    width: 100%;
    height: 8rem;
    overflow: hidden;
  }
  .title {
    display: inline-block;
    width: 80%;
    height: 2rem;
    padding: 0.3rem 0 0 0.3rem;
    font-size: 1rem;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .image {
    width: 100%;
    height: 6rem;
  }
}

:deep(.el-card__header) {
  font-size: 1.6rem;
  padding: 0 !important;
  font-weight: bold;
  line-height: 1.8;
  color: var(--font-color);
}

a {
  text-decoration: underline;
}
@media screen and (min-width: 768px) {
  .mobile-recommend {
    display: none;
  }
}
</style>
