<script setup lang="ts">
import CommonCard from '@/components/CommonCard/index.vue'
import CommonCol from '@/components/CommonCol/index.vue'
</script>


<template>
  <CommonCol :xs="0" :sm="0" :lg="24" :xl="24">
    <CommonCard>
      <div class="home-todo-page">
        <div class="title">计划：</div>
        <div class="content">
            <div class="content-item">
                1、学习nestjs，重构后端(方式：小册，代码，输出文章)
            </div>
            <div class="content-item">
                2、慢慢完善前台，接口什么的逻辑先不修改了，等重构完后端在统一整理（计划是在年底搞完）
            </div>
            <div class="content-item">
                3、按计划搞完服务器也到期了，到时候在搞新服务器上域名，目前就先这样了，学习为主
            </div>
        </div>
      </div>
    </CommonCard>
  </CommonCol>
</template>

<style scoped lang="scss"> 
.home-todo-page{

    .content{
        padding-left: 16px;
        .content-item{
            padding: 6px 0;
        }
    }
}
</style>