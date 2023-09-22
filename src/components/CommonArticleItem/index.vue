<script setup lang="ts">
import type { IArticleItem } from './props'
defineProps<Partial<IArticleItem>>()
</script>

<template>
  <div class="comm-artice-item">
    <img class="article-cover" :src="article?.article_cover" alt="" />
    <div class="title item">{{ article?.article_title }}</div>
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
  margin-bottom: 16px;
  background-color: $card-bg;
  border-radius: $border-radius;
  box-shadow: $box-shadow;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    box-shadow: $main-shadow;
    transform: translateY(-6px);
    .article-cover {
      position: relative;
      transform: scale(1.12);
    }
    .desc {
      transform: translateX(0);
      // display: block;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        display: inline;
        width: 100%;
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
    width: 100%;
    height: 188px;
    object-fit: cover;
    border-radius: $border-radius;
    transition: all 0.3s;
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
    position: absolute;
    // right: 10px;
    right: 0;
    bottom: 0;
    .tag {
      padding: 6px;
      //   color: $text-color-white;
      border-radius: $border-radius;
      background: var(--global-bg-lighter);
      cursor: pointer;
    }
  }
  .desc {
    position: absolute;
    bottom: 66px;
    left: 0;
    padding: 0 20px;
    width: 100%;
    font-size: 14px;
    color: #000;
    word-wrap: break-word;
    box-sizing: border-box;
    transform: translateX(-500px);
    // display: none;
    transition: all 0.4s;
  }
  .category {
    position: absolute;
    left: 10px;
    top: 10px;
    padding: 4px;
    background-color: var(--main);
    color: #fff;
    border-radius: $border-radius;
  }
  .date {
    position: absolute;
    // bottom: 10px;
    bottom: 0;
  }
}
</style>
