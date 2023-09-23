<script setup lang="ts">
import CommonCard from '@/components/CommonCard/index.vue'
import { useAvatarInfo } from '../hooks'
import type { IAvatarInfo } from '../props'
const props = defineProps<IAvatarInfo>()
const { countList } = useAvatarInfo()
</script>

<template>
  <CommonCard>
    <div class="acatar-info">
      <div class="img">
        <img :src="props?.config?.avatar_bg" alt="" />
        
        <div class="circle-wrap">
          <div class="circle"></div>
        </div>
      </div>

      <div class="name">MichstaBe</div>
      <div class="notice">{{ props?.config?.blog_notice }}</div>
      <div class="category">
        <div
          v-for="(item, index) in countList"
          :key="item.label"
          class="category-item"
        >
          <span class="label">{{ item.label }}</span>
          <span class="count">{{ item.count }}</span>
        </div>
      </div>
    </div>
  </CommonCard>
</template>

<style scoped lang="scss">
.acatar-info {
  @include flex($justify: center, $direction: column);
  width: 100%;
  .img {
    position: relative;
    margin-right: 16px;
    width: 120px;
    height: 120px;
    // background: var(--global-bg);
    border-radius: $border-radius;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
      transition: all 0.3s;
      &:hover {
        transform: rotate(360deg);
      }
    }
    .circle-wrap {
      position: absolute;
      right: 6px;
      bottom: 6px;
      width: 28px;
      height: 28px;
      background-color: #fff;
      border-radius: 50%;
      .circle {
      position: absolute;
      right: 2px;
      bottom: 2px;
      width: 22px;
      height: 22px;
      background-color: #6adf8f;
      border-radius: 50%;
    }
    }
  }

  .name {
    margin: 16px 0;
    font-size: 24px;
  }
  .notice {
    margin-bottom: 16px;
    font-size: 22px;
    letter-spacing: 2px;
    border-bottom: 1px;
    // border-bottom: var(--card-border);
  }
  .item {
    padding: 10px;
    background: var(--global-bg);
    width: 100%;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
  .top {
    background-color: #fff;
    height: 120px;
    @include flex($justify: space-between);
    .geo,
    .img {
      position: relative;
      margin-right: 16px;
      width: 50%;
      height: 100%;
      background: var(--global-bg);
      border-radius: $border-radius;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
  .name {
    @include flex();
    border-radius: $border-radius;
  }
  .desc {
    border-radius: $border-radius;
  }
  .category {
    width: 100%;
    padding: 0 20px;
    font-size: 22px;
    @include flex($justify: space-between);
    .category-item {
      @include flex($direction: column);
      position: relative;
      width: 33%;
      // margin-right: 16px;
      padding-bottom: 10px;
      box-sizing: border-box;
      text-align: center;
      cursor: pointer;
      .label {
        margin-bottom: 10px;
        font-size: 18px;
      }
      &:last-child {
        margin-right: 0;
      }
      &:not(:last-child) {
        &::after {
          content: '';
          position: absolute;
          top: 10px;
          right: 0;
          display: inline-block;
          width: 2px;
          height: 80%;
          background-color: #ccc;
        }
      }
      &:hover {
        color: var(--main);
      }
    }
  }
  .link {
    border-radius: $border-radius;
  }
}
</style>
