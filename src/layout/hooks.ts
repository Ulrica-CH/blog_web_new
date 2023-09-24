import { ref } from 'vue'

export function useLoading() {
  const loading = ref(false)
  const onChangeLoading = (flag: boolean) => {
    loading.value = flag
  }

  return [loading,onChangeLoading]
}
