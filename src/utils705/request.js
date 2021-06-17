import axios from 'axios'

const service = axios.create({
  baseURL: 'http://iwenwiki.com:3000/', // 请求地址
  withCredentials: false, // 跨域请求不发送cookie
  timeout: 20 * 1000 // 设置请求超时
})

// 请求设置
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    // 请求错误处理
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应设置
service.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    alert('请求错误')
    console.log(error)
    return Promise.reject(error)
  }
)

export default service
