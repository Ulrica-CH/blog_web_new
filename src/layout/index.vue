<template>
  <div class="layout">
    <Transition name="fade">
      <div v-show="loadingState.loading" class="loading">
        <div class="loader"></div>
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
</script>

<style scoped lang="scss">
.layout {
  width: 100%;
  box-sizing: border-box;
  @include background_color('body_background_color');
  @include font_color('text-color');
  .loading {
    z-index: 9999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include flex($direction: column);
    @include background_color('background_color');
    @include font_color('text-color');
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
    padding-top: 16px;
    box-sizing: border-box;
    // background-color: #f4f6fc;
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
@media screen and (max-width: 768px) {
  .layout {
    .main {
      margin: 0;
      padding: 10px;
    }
  }
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: loadAnimation 1.8s infinite ease-in-out;
}

.loader {
  color: #406eeb;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
  top: 0;
  transform: translate(-50%, 0);
}

.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}

.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}

.loader:after {
  left: 3.5em;
}

@keyframes loadAnimation {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }

  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>
