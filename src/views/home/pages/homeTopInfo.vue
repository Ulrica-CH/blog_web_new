<script setup lang="ts">
import { useTopInfoPage } from '../hooks'
const { leftBottomItem, toPath } = useTopInfoPage()
</script>

<template>
  <div class="home-top-info">
    <div class="item left">
      <div class="top">MichStabe michstabe.cn</div>

      <div class="bottom">
        <div
          :class="'bottom-item-' + (index + 1)"
          v-for="(item, index) in leftBottomItem"
          @click="toPath(item.path)"
        >
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="item right">
      <el-carousel trigger="click" height="150px">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3 class="small justify-center" text="2xl">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-top-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--margin-bottom-16);
  .item {
    width: 49%;
    height: 300px;
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
  }
  .left {
    display: flex;
    flex-direction: column;
    .top {
      height: 70%;
      margin-bottom: 12px;
      background: var(--card-bg);
      border-radius: var(--border-radius);
      cursor: pointer;
    }
    .bottom {
      flex: 1;
      display: flex;
      justify-content: space-between;

      border-bottom-left-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);

      .bottom-item-1,
      .bottom-item-2,
      .bottom-item-3 {
        padding: 10px;
        width: 30%;
        background: var(--card-bg);
        border-radius: var(--border-radius);
        cursor: pointer;
        color: var(--text-color-white);
        transition: var(--transition-normal);
        .title {
          font-size: 18px;
        }
        &:hover {
          width: 36%;

          .title {
            transition: var(--transition-normal);
            transform: translateY(50%) translateX(60%);
          }
        }
      }
      .bottom-item-1 {
        background: -webkit-linear-gradient(left, #364f6b, #3fc1c9);
      }
      .bottom-item-2 {
        background: linear-gradient(to right, #ba52ed, #ff99fe);
      }
      .bottom-item-3 {
        background: linear-gradient(to right, #f12711, #f5af19);
      }
    }
  }
  .right {
    background: var(--card-bg);
    border: var(--card-border);
    // border-radius: var(--border-radius);
    transition: var(--transition-normal);
    cursor: pointer;
    &:hover {
      //   border-color: var(--xy-main);
      box-shadow: var(--main-shadow);
    }
    :deep(.el-carousel) {
      height: var(--h-100-percent);
      .el-carousel__container {
        height: 100% !important;
        .el-carousel__item h3 {
          color: #475669;
          opacity: 0.75;
          line-height: 150px;
          margin: 0;
          text-align: center;
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
      }
    }
  }
}
</style>
../hooks