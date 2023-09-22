import type { IArticle, IConfig} from "@/types";

export interface IMainPageProps {
  articleList: IArticle[]
  config: IConfig
}
export interface IMainLeftPageProps {
  config: IConfig
}
export interface IMainRightPageProps {
  articleList: IArticle[]
}