import request from '@/utils/request'

import type { IHomeGetStatistic } from '@/types'
/** 获取首页数据统计 */
export const homeGetStatistic = (params?:object) => {
    return request<IHomeGetStatistic>({
      method: 'get',
      url: '/api/statistic',
      params
    })
}
