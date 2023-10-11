<script setup lang="ts">
const technologyList = [
  { label: 'Vue3' },
  { label: 'TypeScript' },
  { label: 'Vite' },
  { label: 'Pinia' },
  { label: 'Koa' },
  { label: 'Mysql' },
  { label: 'ElementPlus' },
  { label: 'hooks' }
]
</script>

<template>
  <div class="common-footer">
    <div class="item mb-16">MichstaBe | 个人博客 | 蒙ICP备2021004700号</div>

    <div class="item mb-16">
      参考：
      <a
        class="to-link"
        href="http://mrzym.top/#/"
        target="_blank"
        rel="noopener noreferrer"
        >小张的博客</a
      >
      <a
        class="to-link"
        href="https://blog.leonus.cn/"
        target="_blank"
        rel="noopener noreferrer"
        >Lenous</a
      >
    </div>

    <div class="technologyList-wrap">
      <span
        v-for="(item, index) in technologyList"
        class="technology-item"
        :key="index"
      >
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.common-footer {
  @include flex($direction: column);
  color: var(--base-text-color-white);
  margin: 16px auto 0;
  // width: 98%;
  height: 180px;
  @include background_color('background_color');
  @include font_color('text-color');
  @include border('border');
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
  font-size: 20px;
  // color: var(--base-text-color-black);
  .to-link {
    display: inline-block;
    margin-right: 16px;
    @include background_color('background_color');
    @include font_color('text-color');
    transition: var(--transition-normal);
    &:hover {
      color: var(--xy-main);
    }
  }
  .technologyList-wrap {
    font-size: 16px;
    color: var(--base-text-color-white);
    .technology-item {
      display: inline-block;
      margin: 10px;
      padding: 10px;
      background-color: var(--main);
      // color: var( --base-text-color-white);
      border-radius: var(--border-radius);
      cursor: pointer;
      transition: var(--transition-normal);

      &:nth-child(even) {
        animation: tranY 2s ease-in-out;
        animation-iteration-count: infinite;
      }
      &:nth-child(odd) {
        animation: tranY 2s;
        animation-direction: reverse;
        animation-iteration-count: infinite;
      }
    }
  }
  @keyframes tranY {
    0% {
      transform: translateY(5px);
      background-color: var(--main);
    }
    50% {
      transform: translateY(-5px);
      background-color: #000;
    }
    100% {
      transform: translateY(5px);
      background-color: var(--main);
    }
  }
}
@media screen and (max-width: 768px) {
  .common-footer {
    // display: none;
    height: 140px;
  }
}
</style>
