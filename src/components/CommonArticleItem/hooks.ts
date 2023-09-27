import { useRouter } from 'vue-router'
import type { IArticle } from '@/types'
import { computed } from 'vue'
import dayjs from 'dayjs'
export function useArticleItem() {
  const router = useRouter()
  /* 文章操作 start */
  const operate = (type: string, article: IArticle, index?: number) => {
    switch (type) {
      case 'detail':
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
export function useComputed(time: string) {
  // let differenceInDays = 0
  const computedTime = computed(() => {
    const now = dayjs()
    const date = now.format('YYYY-MM-DD')

    const splitTime = time.split(' ')[0]
    const targetDate = dayjs(splitTime)

    const currentDate = dayjs(date)
    const differenceInDays = targetDate.diff(currentDate, 'day')
    return Math.abs(differenceInDays)
  })

  return { computedTime }
}
