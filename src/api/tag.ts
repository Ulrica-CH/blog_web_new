import request from '@/utils/request'
/** 获取所有的tag */
export const getAllTag = (params?:any) => {
  return request<any>({
    method: 'get',
    url: '/api/tag/getTagDictionary',
    params
  })
}
