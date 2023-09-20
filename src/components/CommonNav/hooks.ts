import { useRouter } from 'vue-router'
export function useNavRouter() {
  const router = useRouter()
  const toPath = (path: string) => {
    router.push(path)
  }
  return [toPath]
}
