<script setup lang="ts">
interface IDialogProps {
  dialogProps: {
    dialogVisible?: boolean
    title?: string
    width: string
  }
}
const deafault = withDefaults(defineProps<IDialogProps>(), {
  dialogProps: () => {
    return {
      dialogVisible: true,
      title: '888',
      width: '30%'
    }
  }
})
console.log(deafault.dialogProps)
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
    v-model="deafault.dialogProps.dialogVisible"
    :title="deafault.dialogProps.title"
    :width="deafault.dialogProps.width"
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
