<script setup lang="ts"></script>

<template>
  <div class="acatar-info">
    <div class="item top">
      <div class="geo">晚上好</div>
      <div class="img">图片</div>
    </div>

    <div class="item name">MichstaBe</div>

    <div class="item desc">
      在这里我将记录学习过程中的笔记、分享一些经验与想法。希望能够帮助到您！
    </div>

    <div class="item category">
      <div class="fir category-item">文章</div>
      <div class="sec category-item">标签</div>
      <div class="third category-item">分类</div>
    </div>

    <div class="item link">5</div>
  </div>
</template>

<style scoped lang="scss">
.acatar-info {
  @include flex($direction: column);
  padding: 20px 20px;
  background-color: $card-bg;
  border-radius: $border-radius;
  box-sizing: border-box;

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
      margin-right: 16px;

      width: 50%;
      height: 100%;
      background: var(--global-bg);
      border-radius: $border-radius;
    }
    .img {
      margin-right: 0;
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
    background-color: #fff;
    @include flex($justify: space-between);
    .category-item {
      width: 30%;
      padding: 10px;
      height: 80px;
      margin-right: 16px;
      background: var(--global-bg);
      border-radius: $border-radius;
      box-sizing: border-box;
      &:last-child {
        margin-right: 0;
      }
    }
  }
  .link {
    border-radius: $border-radius;
  }
}
</style>
