export interface IHomeGetStatistic {
  articleCount: number
  categoryCount: number
  tagCount: number
  userCount: number
}
export interface IArticleList {
  current: string
  size: string
  list: IArticle[]
  total: number
}
export interface IArticle {
  createdAt: string
  updatedAt: string
  id: number
  article_title: string
  author_id: number
  category_id: number
  article_description: string
  article_cover: string
  is_top: number
  status: number
  type: number
  view_times: number
  thumbs_up_times: number
  reading_duration: number
  categoryName: string
  tagNameList: string[]
}

export interface IConfig {
  createdAt: string
  updatedAt: string
  id: number
  blog_name: string
  blog_avatar: string
  avatar_bg: string
  personal_say: string
  blog_notice: string
  qq_link: string
  we_chat_link: string
  github_link: string
  git_ee_link: string
  bilibili_link: string
  view_time: number
}