<template>
  <div class="layout">
    <Transition name="fade">
      <div v-show="loadingState.loading" class="loading">
        <!-- <div class="img" v-image :data-src="loadingImg">
          <img :src="loadingImg" alt="" />

          <div class="circle-wrap">
            <div class="circle"></div>
          </div>
        </div> -->
        <div class="loading-title">加载中...</div>
      </div>
    </Transition>

    <Transition name="fade">
      <div style="width: 100%" v-show="!loadingState.loading">
        <CommonHeader />
        <div class="main">
          <Transition name="fade-transform" mode="out-in">
            <router-view :loading="loadingState.loading"></router-view>
          </Transition>
        </div>
        <CommonFooter />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import CommonHeader from '@/components/CommonHeader/index.vue'
import CommonFooter from '@/components/CommonFooter/index.vue'
import useLoadingStore from '@/store/loading'
const loadingState = useLoadingStore()
import loadingImg from '@/assets/imgs/favicon.jpg'
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  box-sizing: border-box;
  // overflow: hidden;
  .loading {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include flex($direction: column);
    background-color: #fff;
    color: var(--xy-main);
    font-size: 34px;
    width: 100%;
    height: 100%;
    .loading-title {
      animation: opacity 1s ease-in-out;
      animation-iteration-count: infinite;
    }
    .img {
      position: relative;
      @include flex();
      width: 120px;
      height: 120px;
      border-radius: var(--border-radius-circle);
      border-top-left-radius: var(--border-radius);
      border-top-right-radius: var(--border-radius);
      background-image: url('../../../assets/imgs/avatar_bg.webp');
      background-size: cover;
      animation: opacity 1s ease-in-out;
      animation-iteration-count: infinite;

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
        position: absolute;
        left: 52%;
        bottom: 20%;
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
  }
  .main {
    width: 100%;
    margin: 60px auto 0;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f4f6fc;
    // overflow: hidden;
  }

  .main,
  .pc {
    max-width: 1200px;
  }

  @keyframes opacity {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
