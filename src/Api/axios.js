import axios from 'axios'
import store from '../store/index'
var baseURL = 'http://localhost:8080'

class HttpRequest {
  constructor(baseUrl = baseURL) {
    this.baseUrl = baseUrl
    this.queue = {}
  }
  getInsideConfig () {
    const config = {
      baseURL: this.baseUrl,
      headers: {
        //'Content-Type': 'multipart/form-data'
      }
    }
    return config
  }
  distroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      store.commit('changeloading', false)


    }
  }
  interceptors (instance, url) {
    instance.interceptors.request.use(config => {
      console.log('以下请求拦截')
      console.log(config)
      // 添加全局的loading...
      if (!Object.keys(this.queue).length) {
        store.commit('changeloading', true)
      }


      this.queue[url] = true
      // config.headers['Authorization'] = getToken()
      return config
    }, error => {
      return Promise.reject(error)
    })
    instance.interceptors.response.use(res => {
      console.log('以下响应拦截')
      console.log(res)
      this.distroy(url)
      const { data } = res

      return res.data

    }, err => {
      console.log('进入响应拦截response err里面')
      console.log('err', err.response)
      this.distroy(url)

      if (err && err.response) {
        switch (err.response.status) {
          case 400:
            err.message = '请求错误'
            break

          case 401:
            err.message = '未授权，请登录'
            break

          case 403:
            err.message = '拒绝访问'
            break

          case 404:
            err.message = `请求地址出错: ${err.response.config.url}`
            break

          case 408:
            err.message = '请求超时'
            break

          case 500:
            err.message = '服务器内部错误'
            break

          case 501:
            err.message = '服务未实现'
            break

          case 502:
            err.message = '网关错误'
            break

          case 503:
            err.message = '服务不可用'
            break

          case 504:
            err.message = '网关超时'
            break

          case 505:
            err.message = 'HTTP版本不受支持'
            break

          default:
        }
      }

      return Promise.reject(err)
    })
  }
  request (options) {
    const instance = axios.create()
    options = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, options.url)
    return instance(options)
  }
}
export default HttpRequest
