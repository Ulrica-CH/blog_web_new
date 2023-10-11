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
      关于这个网站：目前不打算去做点赞评论，友链等。主要是记录自己的学习，笔记等，搞太多到是失了本心。<br />
      利用业余时间开发，只能慢慢完善了。
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
    background: linear-gradient(
      120deg,
      rgba(91, 39, 255, 1) 0%,
      rgba(0, 212, 255, 1) 100%
    );
    color: #fff;
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
    background: linear-gradient(
      280deg,
      rgba(91, 39, 255, 1) 50%,
      rgba(0, 212, 255, 1) 100%
    );
    color: #fff;
    margin-bottom: 16px;
    padding: 20px 16px;
    border-radius: 16px;
  }
}
@media screen and (max-width: 768px) {
  .mine {
    font-size: 18px;
  }
}
</style>
