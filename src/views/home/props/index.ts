import type { IArticle, IConfig } from '@/types'
export interface IMainPageProps {
  articleList: IArticle[]
  isTopArticleList: IArticle[]
  config: IConfig
}
export interface IMainLeftPageProps {
  config: IConfig
}
export interface IMainRightPageProps {
  articleList: IArticle[]
  isTopArticleList: IArticle[]
}
export interface IAvatarInfo {
  config: IConfig
}
