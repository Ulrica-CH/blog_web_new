import { onMounted, reactive, ref } from 'vue'

export const changeTheme = () => {
  const isDark = ref(false)
  const setAttribute = (key: string) => {
    window.document.documentElement.setAttribute('data-theme', key)
  }
  const handleChangeThemes = (value: boolean) => {
    isDark.value = value
    //    console.log(isDark.value)
    isDark.value ? setAttribute('dark') : setAttribute('light')
  }
  onMounted(() => {
    setAttribute('light')
  })
  return { isDark, handleChangeThemes }
}
