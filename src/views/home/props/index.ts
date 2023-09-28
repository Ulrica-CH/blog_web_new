import type { IArticle, IConfig } from '@/types'
export interface IMainPageProps {
  articleList: IArticle[]
  isTopArticleList: IArticle[]
  config: IConfig
  params: {
    current: number
    size: number
    total: number
  }
}
export interface IMainLeftPageProps {
  config: IConfig
}
export interface IMainRightPageProps {
  articleList: IArticle[]
  isTopArticleList: IArticle[]
  params: {
    current: number
    size: number
    total: number
  }
}
export interface IAvatarInfo {
  config: IConfig
}
