<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { isMobile } from '@/utils'
const isMobileState = ref(false)
onMounted(() => {
  isMobileState.value = isMobile()
})
interface IDialogProps {
  dialogVisible?: boolean
  title?: string
  width?: string
  center?: boolean
}

const props = withDefaults(defineProps<IDialogProps>(), {
  dialogVisible: true,
  title: '新增',
  width: '30%',
  center: true
})
const emit = defineEmits(['handleClose', 'handleSubmit'])
function handleClose() {
  emit('handleClose', false)
}
function handleSubmit() {
  emit('handleSubmit', false)
}
</script>

<template>
  <el-dialog
    v-model="props.dialogVisible"
    :title="props.title"
    :width="isMobileState ? '80%' : props.width"
    :center="props.center"
    @close="handleClose"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleSubmit"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped lang="scss">
.comm-dialog {
}
</style>
