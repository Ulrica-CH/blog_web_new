import { homeGetArticleList } from '@/api/article'
import { homeGetStatistic } from '@/api/home'
import type { IArticleList, IArticle, IHomeGetStatistic } from '@/types'
import { reactive, ref } from 'vue'
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

export function useArticle() {
  /** 文章 */
  const param = reactive({
    current: 1, // 当前页
    size: 10, // 每页条目数
    loading: true // 加载
  })
  const articleList = ref<IArticle[]>([])
  const articleTotal = ref()

  /** 文章 */
  const _homeGetArticleList = async (type: string) => {
    type == 'init' ? '' : (param.loading = true)
    const res: IArticleList = await homeGetArticleList({
      current: param.current,
      size: param.size
    })
    articleList.value = res?.list
    articleTotal.value = res?.total
  }

  return { articleList, articleTotal,_homeGetArticleList }
}

export function useRightCount() {
  /** 分类标签文章 统计 */
  const _homeGetStatistic = async () => {
    const res: IHomeGetStatistic = await homeGetStatistic()
  }
  return { _homeGetStatistic }
}