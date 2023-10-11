<script setup lang="ts">
import { reactive, ref } from 'vue'
import CommonBg from '@/components/CommonBg/index.vue'
import CommonDialog from '@/components/CommonDialog/index.vue'
import friend_bg from '@/assets/imgs/friend_bg.jpg'

const dialogVisible = ref(false)
const data = reactive({
  imgUrl: friend_bg,
  title: '友情链接',
  desc: '与 2 位博主共同进步',
  showBtn: true,
  apply: '+申请友链'
})

const dialogProps = reactive({
    dialogVisible:false,
    // width:''
})
const onBtnClick = () => {
  /** 调起申请友联弹窗 */
  dialogProps.dialogVisible = true
}

const handleClose = () => {
    dialogProps.dialogVisible = false
}
const handleSubmit = () => {
    dialogProps.dialogVisible = false
}
</script>

<template>
  <div class="friend">
    <CommonBg :data="data" @onBtnClick="onBtnClick" />
    <CommonDialog
      :dialogProps="dialogProps"
      @handleClose="handleClose"
      @handleSubmit="handleSubmit"
    />
  </div>
</template>

<style scoped lang="scss">
.friend {
}
</style>
