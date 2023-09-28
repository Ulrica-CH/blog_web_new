<script setup lang="ts">
import { useTopInfoPage, usePathToArtDetail } from '../hooks/index'
import type { IArticle } from '@/types'
defineProps<{ isTopArticleList: IArticle[] }>()
const { leftBottomItem, toPath } = useTopInfoPage()
const [operate] = usePathToArtDetail()
const getImg = (item) => `url(${item.article_cover})`
</script>

<template>
  <div class="home-top-info">
    <div class="item right">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in isTopArticleList" :key="item">
          <div
            class="is_top_item"
            :style="{ backgroundImage: getImg(item) }"
            @click="operate('detail', item)"
          >
            <div class="title">{{ item.article_title }}</div>
            <div class="desc">{{ item.article_description }}</div>
            <div class="create">
              发布时间：{{ item.createdAt?.split(' ')[0] }}
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-top-info {
  @include flex(space-between, _, column);
  margin-bottom: var(--margin-bottom-16);
  width: var(--w-100-persent);
  .item {
    height: 240px;
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
  }
  .right {
    background: var(--card-bg);
    @include border('border');
    border-radius: var(--border-radius);
    transition: var(--transition-normal);
    cursor: pointer;
    &:hover {
      box-shadow: var(--main-shadow);
    }
    :deep(.el-carousel) {
      height: var(--h-100-percent);
      .el-carousel__container {
        height: 100% !important;
        .el-carousel__item {
          height: var(--h-100-percent);
          border-radius: var(--border-radius);
          background-color: var(--base-text-color-black);

          .is_top_item {
            @include flex($direction: column);
            width: var(--w-100-percent);
            height: var(--h-100-percent);
            color: var(--base-text-color-white);
            background-size: cover;

            .title {
              font-size: 24px;
              margin-bottom: 16px;
            }
            .desc {
              font-size: 18px;
              margin-bottom: 16px;
            }
            .create {
              font-size: 20px;
              // margin-bottom: 16px;
            }
          }
        }
      }
    }
  }
}
</style>
