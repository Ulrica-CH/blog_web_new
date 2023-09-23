import { computed } from 'vue'
import { useRouter, type RouteRecordRaw } from 'vue-router'
export function useNavRouter() {
  const router = useRouter()
  const toPath = (path: string) => {
    router.push(path)
  }
  return [toPath]
}
export function useComputed(router:RouteRecordRaw[]) {
  const routerArr = computed(() => router.filter((item) => !item.meta!.hidden))

  return [routerArr]
}
