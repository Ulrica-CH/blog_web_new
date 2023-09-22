
import request from '@/utils/request'
import type { IConfig } from '@/types'
/** 首页获取网站config */
export const homeGetConfig = (params?:object) => {
  return request<IConfig>({
    method: 'get',
    url: '/api/config',
    params
  })
}

/** 增加网站访问量 */
// export const addView = () => {
//   return new Promise((resolve, reject) => {
//     http.put("/api/config/addView", {}).then((res) => {
//       resolve(res);
//     });
//   });
// };

// /** 获取所有的背景图片 */
// export const getAllPageHeader = () => {
//   return new Promise((resolve, reject) => {
//     http.get("/api/pageHeader/getAll", {}).then((res) => {
//       resolve(res);
//     });
//   });
// };