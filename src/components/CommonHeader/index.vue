<script setup lang="ts">
import { subRouter } from '@/router/subRouter'
import CommonLogo from '@/components/CommonLogo/index.vue'
import CommonNav from '@/components/CommonNav/index.vue'
import CommonSvg from '@/components/CommonSvg/index.vue'
import { changeTheme } from '@/hooks'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useNavRouter, useComputed } from '../CommonNav/hooks'
const [routerArr] = useComputed(subRouter)
const [toPath] = useNavRouter()
const { isDark, handleChangeThemes } = changeTheme()
const router = useRouter()
const mobileState = ref(false)

const direction = ref('rtl')
const showMobileMenu = () => {
  mobileState.value = true
}
const handleClose = () => {
  mobileState.value = false
}
const toMobilePath = (path: string) => {
  mobileState.value = false
  toPath(path)
}
const back = () => {
  router.go(-1)
}
</script>

<template>
  <div class="common-header-wrap">
    <div class="header">
      <CommonLogo />
      <CommonNav />
    </div>
  </div>

  <div class="mobile-menu">
    <CommonSvg icon="home" size="26" @click="showMobileMenu" />
    <div class="back" @click="back">Back</div>
    <dir>适配正在完善...</dir>
    <el-switch
      v-model="isDark"
      @change="(value: boolean) => handleChangeThemes(value)"
    />
  </div>

  <el-drawer
    v-model="mobileState"
    title="导航菜单"
    direction="ltr"
    :before-close="handleClose"
    :append-to-body="true"
    class="my-drawer"
    size="200px"
    :z-index="9999"
  >
    <div
      class="nav-item"
      v-for="(item, index) in routerArr"
      :key="index"
      @click="toMobilePath(item.path)"
    >
      <CommonSvg :icon="item.meta?.icon" />

      <RouterLink class="router-link" :to="item.path">{{
        item.meta?.title
      }}</RouterLink>
    </div>
  </el-drawer>
</template>

<style scoped lang="scss">
.common-header-wrap {
  z-index: 999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 60px;
  @include background_color('body_background_color');
  @include font_color('text-color');
  box-shadow: var(--box-shadow);
  @include border('border');

  .header {
    @include flex($justify: space-between);
    margin: 0 auto;
    max-width: 1296px;
    height: var(--h-100-percent);
  }
}
.mobile-menu {
  display: none;
}
@media screen and (max-width: 768px) {
  .common-header-wrap {
    display: none;
  }
  .mobile-menu {
    display: flex;
    // height: 40px;
    padding: 10px 20px;
    border-bottom: var(--base-border);
    display: flex;
    align-items: center;
    justify-content: space-between;

    .back{
      font-size: 18px;
      font-weight: 600;
    }
  }

  .el-drawer {
    :deep(.el-drawer__header) {
      margin-bottom: 16px !important;
    }
    .nav-item {
      display: flex;
      align-items: center;
      padding: 10px 0;
      border-top: var(--base-border);
    }
  }
}
</style>
