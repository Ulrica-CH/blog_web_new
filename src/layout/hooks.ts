import { ref } from 'vue'

export function useLoading() {
  const loading = ref(false)
  const onChangeLoading = (flag: boolean) => {
    console.log(flag)
    loading.value = flag
  }

  return [loading,onChangeLoading]
}
