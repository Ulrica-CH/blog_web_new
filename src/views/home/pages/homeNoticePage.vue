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
    margin-bottom: 16px;
    width: 100% ;
    display: flex;
    height: auto;
    padding: 10px 16px;
    border-radius: $border-radius;
    border: $card-border;
    background: $card-bg;
    box-shadow: $box-shadow;
    box-sizing: border-box;
    transition: all .3s;
    &:hover {
      border-color: $main;
      box-shadow: $main-shadow;
    }
    .content{
        margin-left: 10px;
    }
}
</style>