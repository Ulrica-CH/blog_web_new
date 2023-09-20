import { ref } from 'vue'
export function useToggleLogo() {
  const showIcon = ref(false)
  const mouseenter = () => {
    showIcon.value = true
  }
  const mouseout = () => {
    showIcon.value = false
  }

  return { showIcon, mouseenter, mouseout }
}
