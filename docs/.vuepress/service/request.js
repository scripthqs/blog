import axios from 'axios'
const request = axios.create({
  baseURL: '/api',
  timeout: 1000 * 600
})

// 请求前拦截
request.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = 'NIS OQC9MjpxGzZadlvVYqVCGxohyK4Pm0DlM+Epko3rHwabg7+myLbi4g=='
    config.headers['Content-Type'] = 'application/json'


    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 返回结果前拦截
request.interceptors.response.use((response) => {
  return response.data
})

export default request