import { useRouter } from 'vue-router'
export function useTopInfoPage() {
  const leftBottomItem = [
    { title: '分类', path: '/category' },
    { title: '标签', path: '/tag' },
    { title: '日志', path: '/log' }
  ]
  const router = useRouter()
  const toPath = (path: string) => {
    router.push(path)
  }
  return { leftBottomItem, toPath }
}
