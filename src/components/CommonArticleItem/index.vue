<script setup lang="ts">
import type { IArticleItem } from './props'
import { useArticleItem, useComputed } from './hooks.ts'
import CommonSvg from '@/components/CommonSvg/index.vue'
const props = defineProps<IArticleItem>()
const [operate] = useArticleItem()

const { computedTime } = useComputed(props.article?.createdAt)
</script>

<template>
  <div class="comm-artice-item">
    <div
      v-image
      :data-src="article.article_cover"
      class="article-cover"
      :style="{position:'absolute', left: props.index % 2 === 0 && 0 }"
    >
      <img
        :src="article?.article_cover"
        alt=""
        class="cover_img animate__animated animate__fadeInDown"
      />
    </div>
    <div class="content" :style="{ right: props.index % 2 === 0 && 0 }">
      <div class="title item" @click="operate('detail', article)">
        <!-- <CommonSvg icon="xinxi" /> -->
        {{ article?.article_title }}
      </div>

      <div class="tags-cate-wrap">
        <div class="tags item">
          <span
            v-for="(item, index) in props.article?.tagNameList"
            :key="index"
            class="tag"
          >
            <CommonSvg icon="tag" />
            {{ item }}
          </span>
        </div>

        <div class="date">
          <CommonSvg icon="time" />
          {{ computedTime }}天前
        </div>
      </div>

      <div class="desc">
        {{ props.article?.article_description }}
      </div>
    </div>

    <div
      class="category"
      :style="{
        right: props.index % 2 !== 0 && '10px',
        left: props.index % 2 === 0 && '10px'
      }"
    >
      <CommonSvg icon="category" />
      {{ props.article?.categoryName }}
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

    .article-cover {
      // transform: scale(1.2);
      .cover_img {
        transform: scale(1.2);
      }
    }
  }

  .article-cover {
    position: relative;
    right: 0;
    width: 45%;
    height: 100%;

    transition: var(--transition-normal);
    overflow: hidden;
    .cover_img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: var(--border-radius);
      transition: var(--transition-normal);
      animation-fill-mode:none !important;
    }
  }
  .content {
    position: absolute;
    @include flex($direction: column);
    width: 55%;
    height: 100%;
  }
  .item {
    margin: 10px 0;
    padding: 0 20px;
  }
  .title {
    @include flex();
    font-size: 22px;
    font-weight: 600;
  }
  .info {
    @include flex($justify: flex-start);
  }
  .tags-cate-wrap {
    @include flex();

    .tags {
      // @include positionA(_, 0, 0, _);
      @include flex();
      .tag {
        @include flex();
        margin: 0 4px;
        padding: 6px;
        border-radius: var(--border-radius);
        background: var(--global-bg-lighter);
        cursor: pointer;
      }
    }

    .date {
      @include flex();
    }
  }
  .category {
    position: absolute;
    // left: 10px;
    top: 10px;
    padding: 4px;
    @include flex();
    // background-color: var(--base-text-color-black);
    background-color: rgba(0, 0, 0.2);
    color: var(--base-text-color-white);
    border-radius: var(--border-radius);
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
}
</style>
