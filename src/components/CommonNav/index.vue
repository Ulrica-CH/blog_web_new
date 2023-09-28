<script setup lang="ts">
import { subRouter } from '@/router/subRouter'
import CommonSvg from '@/components/CommonSvg/index.vue'
import { RouterLink } from 'vue-router'
import { useNavRouter ,useComputed} from './hooks'
const [toPath] = useNavRouter()
const [routerArr] = useComputed(subRouter)
</script>

<template>
  <div class="common-nav">
    <div
      class="nav-item"
      v-for="(item, index) in routerArr"
      :key="index"
      @click="toPath(item.path)"
    >
      <CommonSvg :icon="item.meta?.icon" />
      <RouterLink class="router-link" :to="item.path">{{
        item.meta?.title
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
    border-radius: var(--border-radius);
    cursor: pointer;
    transition: var(--transition-normal);
    &:hover {
      @include hoverCommStyle();

      .router-link {
        color: var(--base-text-color-white);
      }
      .router-link-active {
        color: var(--base-text-color-white);
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
    color: var(--xy-main);

    // &::after {
    //   content: '';
    //   @include positionA(_, _, -6px, -22px);
    //   display: inline-block;
    //   // width: 58px;
    //   height: 2px;
    //   background-color: var(--xy-main);
    // }
  }
}
</style>
