<script setup lang="ts">
import { subRouter } from '@/router/subRouter'
import CommonIcon from '@/components/CommonIcon/index.vue'
import { RouterLink } from 'vue-router'
import { useNavRouter } from './hooks'
const [toPath] = useNavRouter()
</script>

<template>
  <div class="common-nav">
    <div
      class="nav-item"
      v-for="(item, index) in subRouter"
      :key="index"
      @click="toPath(item.path)"
    >
      <CommonIcon :icon="item.mate.icon" size="18" />
      <RouterLink class="router-link" :to="item.path">{{
        item.mate.title
      }}</RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.common-nav {
  @include flex();
  font-size: 18px;
  .nav-item {
    @include flex();
    margin: 0 4px;
    padding: 10px;
    border-radius: $border-radius-10;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      @include hoverCommStyle();

      .router-link {
        color: $text-color-white;
      }
      .router-link-active {
        color: $text-color-white;
      }
    }
    .title {
      margin-left: 4px;
    }
  }
  .router-link {
    margin-left: 6px;
    font-size: 18px;
  }
  .router-link-active {
    position: relative;
    color: $active-color;

    &::after {
      content: '';
      position: absolute;
      bottom: -6px;
      left: -22px;
      display: inline-block;
      width: 58px;
      height: 2px;
      background-color: $active-color;
    }
  }
}
</style>
