import request from '@/utils/request'
/** 分页获取友链 */
export const getFriendLinks = (params?: object) => {
  return request<any>({
    method: 'post',
    url: '/api/links/getLinksList',
    data: params
  })
}

/** 新增友链 */
export const addFriendLinks = (params?: object) => {
  return request<any>({
    method: 'post',
    url: '/api/links/addOrUpdate',
    data: params
  })
}
