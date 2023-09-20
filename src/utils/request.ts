import axios, { type AxiosRequestConfig } from 'axios'
import qs from 'qs'

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
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
    return Promise.reject(error)
  }
)
export default async <T = any>(config: AxiosRequestConfig) => {
  const res = await service(config)
  return res.data as T
}
