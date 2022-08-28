import axios, { AxiosResponse } from 'axios';
import { ElMessage, ElLoading } from 'element-plus'
import { getToken } from '@/utils/token';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let loading:any = null

axios.defaults.baseURL = '/blog'

// Important: If axios is used with multiple domains, the AUTH_TOKEN will be sent to all of them.
// See below for an example using Custom instance defaults instead.
axios.defaults.headers.common['Authorization'] = 'login'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const http = axios.create({
  // baseURL: process.env.BASE_API,
  timeout: 10 * 1000 // 请求超时时间
})

// Add a request interceptor
http.interceptors.request.use(config => {
  const token:string|null = getToken()
  if (token && config?.headers) {
     config.headers['Authorization'] = 'Bearer ' + token;
  }
  // Do something before request is sent
  loading = ElLoading.service({
    lock: true,
    text: '正在加载..',
    customClass: 'jz-load-icon',
    spinner: 'el-icon-loading',
    background: 'rgba(255, 255, 255, 0.3)'
  })
  return config;
}, error => {
  // Do something with request error
  return Promise.reject(error);
});


// Add a response interceptor
http.interceptors.response.use((response: AxiosResponse)=> {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  loading?.close()
  if (response.data.code !== '000000') {
    ElMessage({
      message: response.data.message || response.data.responseMsg,
      type: 'error',
      duration: 5 * 1000
    })
  }
  return response.data;
}, error => {
  loading?.close()
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  let message = error && error.message
  const isLoginOut = error.response.status === 401
  if (isLoginOut) {
    message = '请重新登录'
  }
  ElMessage({
    message,
    type: 'error',
    duration: 3 * 1000,
    onClose() {
      if (isLoginOut) {
        location.replace(location.origin + location.pathname + '#/login')
      }
    }
  })
  return Promise.reject(error);
});

export default http