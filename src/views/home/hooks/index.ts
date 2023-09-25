import { homeGetArticleList } from '@/api/article'
import { homeGetStatistic } from '@/api/home'
import { homeGetConfig } from '@/api/config'
import type {
  IArticleList,
  IArticle,
  IHomeGetStatistic,
  IConfig
} from '@/types'
import { reactive, ref, useAttrs, watch,defineEmits } from 'vue'
import { useRouter } from 'vue-router'
// const router = useRouter()
/** 头部信息 */
export function useTopInfoPage() {
  const router = useRouter()
  const leftBottomItem = [
    { title: '分类', path: '/category' },
    { title: '标签', path: '/tag' },
    { title: '日志', path: '/log' }
  ]
 
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
  /** 置顶文章 */
  const isTopArticleList = ref<IArticle[]>([])
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

    isTopArticleList.value =  res?.list.filter(item => item.is_top === 1)
  }
  
  return { articleList, isTopArticleList,articleTotal, _homeGetArticleList }
}
export function usePathToArtDetail() {
  const router = useRouter()
  /* 文章操作 start */
  const operate = (type: string, article: IArticle, index?: number) => {
    switch (type) {
      case 'detail':
        console.log(router,article)
        router.push({ path: '/article', query: { id: article.id } })
        break
      case 'tag':
        router.push({ path: '/tag' })
        break
      case 'category':
        router.push({ path: '/category' })
        break
    }
  }

  return [operate]
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
  const runtime = ref(0)
  const calcRuntimeDays = (time:string) => {
    if (time) {
      time = time.replace(/\-/g, "/"); // 解决ios系统上格式化时间出现NAN的bug
      const now = new Date().getTime();
      const created = new Date(time).getTime();
      const days = Math.floor((now - created) / 8.64e7);
      runtime.value = days;
      console.log(days)
    }
  };
  const _homeGetConfig = async () => {
    const res = await homeGetConfig()
    config.value = res
    calcRuntimeDays(config.value.createdAt)
  }
  return { config,runtime, _homeGetConfig }
}
/**  */
export function useAvatarInfo() {
  const attrs = useAttrs()
  const countList = reactive<countItem[]>([
    { label: '文章', key: 'articleCount', count: 0 },
    { label: ' 分类', key: 'categoryCount', count: 0 },
    { label: '标签', key: 'tagCount', count: 0 }
  ])
  type HomeStatisticUpdate = {
    [key: string]: any
  }

  type countItem = {
    label: string
    key: string
    count: number
  }

  watch(
    () => attrs.infoCount,
    (newVal: IHomeGetStatistic & HomeStatisticUpdate) => {
      countList.forEach(item => {
        item.count = newVal[item.key]
      })
    }
  )

  return { countList }
}
export function useLoading(emits:any) {
  const changeLoadingStatus = (flag:boolean) => {
    emits("onChangeLoading", flag) 
  }

  return [changeLoadingStatus]
}