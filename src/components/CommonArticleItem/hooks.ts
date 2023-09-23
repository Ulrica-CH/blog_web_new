import { useRouter } from 'vue-router'
import type { IArticle } from '@/types'

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
