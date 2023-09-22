import { homeGetArticleList } from '@/api/article'
import { homeGetStatistic } from '@/api/home'
import { homeGetConfig } from '@/api/config'
import type {
  IArticleList,
  IArticle,
  IHomeGetStatistic,
  IConfig,
  IInfoCount
} from '@/types'
import { reactive, ref, useAttrs,defineProps} from 'vue'
import { useRouter } from 'vue-router'
import type { IAvatarInfo } from '../props'

/** 头部信息 */
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

/** 文章相关 */
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

  return { articleList, articleTotal, _homeGetArticleList }
}

/** 左侧统计 */
export function useRightCount() {
  const infoCount = ref<IHomeGetStatistic>({})
  /** 分类标签文章 统计 */
  const _homeGetStatistic = async () => {
    infoCount.value = await homeGetStatistic()
  }
  return { infoCount, _homeGetStatistic }
}

/** 左侧配置 */
export function useRightConfig() {
  let config = ref<IConfig>({
    createdAt: '',
    updatedAt: '',
    id: 0,
    blog_name: '',
    blog_avatar: '',
    avatar_bg: '',
    personal_say: '',
    blog_notice: '',
    qq_link: '',
    we_chat_link: '',
    github_link: '',
    git_ee_link: '',
    bilibili_link: '',
    view_time: 0
  })
  const _homeGetConfig = async () => {
    const res = await homeGetConfig()
    console.log(res)
    config.value = res
  }
  return { config, _homeGetConfig }
}
/**  */
export function useAvatarInfo() {
  // const props = defineProps<IAvatarInfo>()
  const attrs: IInfoCount = useAttrs()
  const countList = [
    { label: '文章', count: attrs.infoCount?.articleCount },
    { label: ' 分类', count: attrs.infoCount?.categoryCount },
    { label: '标签', count: attrs.infoCount?.tagCount }
  ]

  return {countList}
}
