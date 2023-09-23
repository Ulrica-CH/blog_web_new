<script setup lang="ts">
import type { IArticleItem } from './props'
import { useRouter } from 'vue-router'
import { useArticleItem } from './hooks.ts'
defineProps<Partial<IArticleItem>>()
const [operate] = useArticleItem()
/* 文章操作 end */
</script>

<template>
  <div class="comm-artice-item">
    <img class="article-cover" :src="article?.article_cover" alt="" />
    <div class="title item" @click="operate('detail', article)">
      {{ article?.article_title }}
    </div>
    <div class="category">{{ article?.categoryName }}</div>
    <div class="tags item">
      <span
        v-for="(item, index) in article?.tagNameList"
        :key="index"
        class="tag"
      >
        #{{ item }}
      </span>
    </div>
    <div class="desc">文章描述： {{ article?.article_description }}</div>
    <div class="date item">{{ article?.createdAt.split(' ')[0] }}</div>
  </div>
</template>

<style scoped lang="scss">
.comm-artice-item {
  position: relative;
  width: 49%;
  height: 330px;
  margin-bottom: var(--margin-bottom-16);
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  border: var(--base-border);
  overflow: hidden;
  transition: var(--transition-normal);
  cursor: pointer;
  color: var(--base-text-color-black);
  &:hover {
    box-shadow: var(--main-shadow);
    transform: translateY(-6px);
    border: var(--hover-border);
    .article-cover {
      position: relative;
      transform: scale(1.12);
    }
    .desc {
      transform: translateX(0);
      &::after {
        content: '';
        @include positionA(0, 0, _, 0);
        display: inline;
        width: var(--w-100-percent);
        height: 150px;
        background: linear-gradient(
          180deg,
          transparent 0,
          rgba(0, 0, 0, 0.6) 75%
        );
      }
    }
  }

  .article-cover {
    width: var(--w-100-percent);
    height: 188px;
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: var(--transition-normal);
    overflow: hidden;
  }
  .item {
    margin: 10px 0;
    padding: 0 20px;
  }
  .title {
    font-size: 22px;
    font-weight: 600;
  }
  .info {
    @include flex($justify: flex-start);
  }
  .tags {
    @include positionA(_, 0, 0, _);
    .tag {
      padding: 6px;
      border-radius: var(--border-radius);
      background: var(--global-bg-lighter);
      cursor: pointer;
    }
  }
  .desc {
    @include positionA(_, 66px, _, 0);
    padding: 0 20px;
    width: var(--w-100-percent);
    font-size: 14px;
    color: var(--base-text-color-black);
    word-wrap: break-word;
    transform: translateX(-500px);
    transition: var(--transition-normal);
  }
  .category {
    @include positionA(10px, _, _, 10px);
    padding: 4px;
    background-color: var(--xy-main);
    color: var(--base-text-color-white);
    border-radius: var(--border-radius);
  }
  .date {
    @include positionA(_, _, 0, _);
  }
}
</style>
