<script setup lang="ts">
import type { IArticleItem } from './props'
import { useRouter } from 'vue-router'
import { useArticleItem } from './hooks.ts'
const props = defineProps<Partial<IArticleItem>>()
const [operate] = useArticleItem()
/* 文章操作 end */
</script>

<template>
  <div class="comm-artice-item">
    <img
      class="article-cover"
      :style="{ left: props.index % 2 === 0 && 0 }"
      :src="article?.article_cover"
      alt=""
    />
    <div class="content" :style="{ right: props.index % 2 === 0 && 0 }">
      <div class="title item" @click="operate('detail', article)">
        {{ article?.article_title }}
      </div>

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

    <div
      class="category"
      :style="{
        right: props.index % 2 !== 0 && '10px',
        left: props.index % 2 === 0 && '10px'
      }"
    >
      {{ article?.categoryName }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.comm-artice-item {
  position: relative;
  @include flex($justify: space-between);
  width: 100%;
  height: 220px;
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
    transform: translateX(6px);
    border: var(--hover-border);
  }

  .article-cover {
    position: absolute;
    right: 0;
    width: 50%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius);
    transition: var(--transition-normal);
    overflow: hidden;
  }
  .content {
    position: absolute;
    @include flex($direction: column);
    width: 50%;
    height: 100%;
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
    // @include positionA(_, 66px, _, 0);
    padding: 0 20px;
    // width: var(--w-100-percent);
    font-size: 14px;
    color: var(--base-text-color-black);
    word-wrap: break-word;
    // transform: translateX(-500px);
    transition: var(--transition-normal);
  }
  .category {
    position: absolute;
    // left: 10px;
    top: 10px;
    padding: 4px;
    background-color: var(--base-text-color-black);
    color: var(--base-text-color-white);
    border-radius: var(--border-radius);
  }
  .date {
    // @include positionA(_, _, 0, _);
  }
}
</style>
