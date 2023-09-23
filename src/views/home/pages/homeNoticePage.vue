<script setup lang="ts">
import CommonIcon from '@/components/CommonIcon/index.vue'
</script>


<template>
  <div class="home-notice-page"> 
    <CommonIcon icon="ChatDotSquare" color="red" size="18"/>
    <div class="content">V3 + TS + Vite 重构 web....</div>
     </div>
</template>

<style scoped lang="scss"> 
.home-notice-page{
    margin-bottom: var(--margin-bottom-16);
    width: bar(--w-100-persent) ;
    display: flex;
    padding: 20px 16px;
    border-radius: var(--border-radius);
    background: var(--card-bg);
    box-shadow: var(--box-shadow);
    border: var(--base-border);
    color: var(--base-text-color-black);
    transition: var(--transition-normal);
    &:hover {
      border: var(--hover-border);
      box-shadow: var(--main-shadow);
    }
    .content{
        margin-left: 10px;
    }
}
</style>