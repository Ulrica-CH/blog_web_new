import axios, { type AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { h } from 'vue'
import { ElNotification } from 'element-plus'
const service = axios.create({
  // baseURL: import.mate.env.VUE_APP_BASE_API,
  timeout: 600000
})

let message = ''
service.interceptors.request.use(
  (config: any) => {
    // do something before request is sent
    if (!config.params) {
      config.params = {}
    }
    if (config.method === 'get') {
      delete config.headers['Content-Type']
      config.paramsSerializer = function (params: any) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    }
    if (config.isFormData) {
      config.headers['Content-Type'] =
        'application/x-www-form-urlencoded;charset=utf-8'
    }
    config.params['_'] = Math.random()
    return config
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  async (response: any) => {
    return response.data
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    const { status, data } = error.response
    switch (status + '') {
      // case '401':
      //   // 403 表示用户未登录，或者token过期了
      //   ElNotification({
      //     offset: 60,
      //     title: '错误提示',
      //     message: h(
      //       'div',
      //       { style: 'color: #f56c6c; font-weight: 600;' },
      //       data.message || '登录过期'
      //     )
      //   })
      //   // 进行重新登录
      //   const userStore = user()
      //   userStore.clearUserInfo()
      //   router.push('/login')
      //   break
      // case '403':
      //   // 403 表示权限不足
      //   ElNotification({
      //     offset: 60,
      //     title: '错误提示',
      //     message: h(
      //       'div',
      //       { style: 'color: #f56c6c; font-weight: 600;' },
      //       data.message || '权限不足'
      //     )
      //   })
      //   break
      case '404':
        ElNotification({
          offset: 60,
          title: '错误提示',
          message: h(
            'div',
            { style: 'color: #f56c6c; font-weight: 600;' },
            '接口没有找到'
          )
        })
        break
      case '500':
        ElNotification({
          offset: 60,
          title: '错误提示',
          message: h(
            'div',
            { style: 'color: #f56c6c; font-weight: 600;' },
            data.message || '服务端错误'
          )
        })
        break
      default:
        return
    }
    return Promise.reject(error)
  }
)
export default async <T = any>(config: AxiosRequestConfig) => {
  const res = await service(config)
  return res.data as T
}
