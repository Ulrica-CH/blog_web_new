<script setup lang="ts">
import skillPage from './components/skill.vue'
</script>

<template>
  <div class="mine">
    <div class="author-card">
      <div class="author-card-desc">简介</div>
      <div class="author-card-subtitle">您好，很高兴认识你👋</div>
      <div class="author-card-title">我是 MichstaBe</div>
      <div class="author-card-subtitle2">是一名 前端开发工程师</div>
    </div>

    <div class="about-card">
      关于这个网站：主要是记录自己的学习，笔记等，  利用业余时间开发。<br />
    </div>

    <skillPage />
  </div>
</template>

<style scoped lang="scss">
.mine {
  margin: 16px auto;
  // max-width: 81rem;
  // height: calc(100vh - 220px);
  .author-card {
    width: 100%;
    @include background_color('background_color');
    @include font_color('text-color');
    border-radius: 10px;
    @include cardShadow('shadow');
    margin-bottom: 16px;
    padding: 0px 16px;
    border-radius: 16px;

    .author-card-desc {
      padding: 1rem 0;
      font-size: 80%;
      opacity: 0.8;
      color: #fff;
    }
    .author-card-title {
      padding: 1rem 0;
      font-size: 2rem;
      font-weight: bold;
    }
    .author-card-subtitle2 {
      padding: 0 0 1rem;
    }
  }
  .about-card {
    width: 100%;
    @include background_color('background_color');
    @include font_color('text-color');
    border-radius: 10px;
    @include cardShadow('shadow');
    margin-bottom: 16px;
    padding: 20px 16px;
    border-radius: 16px;
  }
  :deep(.el-card) {
    @include background_color('background_color');
    @include font_color('text-color');
    border-radius: 10px;
    @include cardShadow('shadow');
    border: none;
    .el-card__header{
      // border: none;
      border-bottom: 1px solid #230506;
    }
  }
}
@media screen and (max-width: 768px) {
  .mine {
    font-size: 18px;
  }
}
</style>
