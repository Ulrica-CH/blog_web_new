import request from '@/utils/request'
/** 获取所有的category */
export const getAllCategory = (params?:any) => {
  return request<any>({
    method: 'get',
    url: '/api/category/getCategoryDictionary',
    params
  })
}
