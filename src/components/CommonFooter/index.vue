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
    <div class="item mb-16">MichstaBe | 个人博客</div>

    <div class="item mb-16">备案号</div>

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
  height: 180px;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 20px;

  .technologyList-wrap {
    font-size: 16px;
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
  .common-footer{
    display: none;
  }
}
</style>
