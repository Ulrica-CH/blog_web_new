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
    width: 100% ;
    display: flex;
    height: auto;
    padding: 10px 16px;
    border-radius: var(--border-radius);
    border: var(--card-border);
    background: var(--card-bg);
    box-shadow: var(--box-shadow);
    box-sizing: border-box;
    transition: all .3s;
    &:hover {
      border-color: var(--xy-main);
      box-shadow: var(--main-shadow);
    }
    .content{
        margin-left: 10px;
    }
}
</style>