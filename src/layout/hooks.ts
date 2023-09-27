import { ref } from 'vue'

export function useLoading() {
  const loading = ref(true)
  const onChangeLoading = (flag: boolean) => {
    loading.value = flag
  }

  return { loading, onChangeLoading }
}
