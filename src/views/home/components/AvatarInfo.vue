<script setup lang="ts">
import CommonCard from '@/components/CommonCard/index.vue'
import { useAvatarInfo } from '../hooks'
import type { IAvatarInfo } from '../props'
const props = defineProps<IAvatarInfo>()
const { countList } = useAvatarInfo()
</script>

<template>
  <CommonCard noPadding>
    <div class="acatar-info">
      <div class="img">
        <img :src="props?.config?.avatar_bg" alt="" />

        <div class="circle-wrap">
          <div class="circle"></div>
        </div>
      </div>
      <div class="name">MichstaBe</div>
      <!-- <div class="notice">{{ props?.config?.blog_notice }}</div> -->
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
  width: var(--w-100-percent);
  color: var(--base-text-color-black);

  .img {
    position: relative;
    // margin-right: 16px;
    @include flex();
    width: var(--w-100-percent);
    height: 160px;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    background-image: url('../../../assets/imgs/avatar_bg.webp');
    background-size: cover;

    img {
      @include imgStyl();
      width: 120px;
      height: 120px;
      border-radius: var(--border-radius-circle);
      transition: var(--transition-normal);
      object-fit: contain;
      &:hover {
        transform: rotate(360deg);
      }
    }
    .circle-wrap {
      @include positionA(_, 94px, 24px, _);
      width: 28px;
      height: 28px;
      background-color: #fff;
      border-radius: var(--border-radius-circle);
      .circle {
        @include positionA(_, 2px, 2px, _);
        width: 22px;
        height: 22px;
        background-color: #6adf8f;
        border-radius: var(--border-radius-circle);
      }
    }
  }

  .name {
    margin: 16px 0;
    font-size: 24px;
  }
  .notice {
    margin-bottom: var(--margin-bottom-16);
    font-size: 22px;
    letter-spacing: 2px;
    border-bottom: 1px;
  }
  .name {
    @include flex();
    border-radius: var(--border-radius);
  }
  .category {
    width: var(--w-100-percent);
    padding: 0 20px;
    font-size: 22px;
    @include flex($justify: space-between);
    .category-item {
      @include flex($direction: column);
      position: relative;
      width: 33%;
      padding-bottom: 10px;
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
          @include positionA(10px, 0, _, _);
          display: inline-block;
          width: 2px;
          height: 80%;
          background-color: #f5f5f5;
        }
      }
      &:hover {
        color: var(--xy-main);
      }
    }
  }
}
</style>
