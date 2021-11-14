import axios, { AxiosRequestConfig } from 'axios'
import store from '../store/index'
import { Message } from 'element-ui'
import router from '@/router/index'
import qs from 'qs'
let isRefrashToken = false

type noop = ()=>void

let notOkToken:noop[] = []
function refrashToken () {
  return axios.create()({
    method: 'POST',
    url: '/front/user/refresh_token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      refreshtoken: store.state.user.refresh_token
    })
  })
}

const request = axios.create({
})

request.interceptors.request.use(function (config: AxiosRequestConfig) {
  if (store.state.user) {
    config.headers = { Authorization: store.state.user.access_token }
  }
  return config
})

request.interceptors.response.use(function (res) {
  return res
}, async function (error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
    // 400 401 403 404 500
    const { status } = error.response

    if (status === 400) {
      Message.error('参数错误')
    } else if (status === 401) {
      if (!store.state.user) {
        router.push({
          name: 'login',
          query: {
            redirect: router.currentRoute.fullPath
          }
        })

        return Promise.reject(error)
      }
      if (!isRefrashToken) {
        isRefrashToken = true
        return refrashToken()
        .then(res => {
          if (!res.data.success) {
            throw new Error('')
          }
          store.commit('setUser', res.data.content)

          notOkToken.forEach(cb => cb())
          notOkToken = []
          return request(error.config)
        })
        .catch(err => {
          router.push({
            name: 'login',
            query: {
              redirect: router.currentRoute.fullPath
            }
          })
          store.commit('setUser', null)
          return Promise.reject(err)
        })
        .finally(() => {
          isRefrashToken = false
        })
      }

      return new Promise(resolve => {
        notOkToken.push(() => {
          resolve(request(error.config))
        })
      })
    } else if (status === 403) {
      Message.error('没有权限')
    } else if (status === 404) {
      Message.error('请求资源不存在')
    } else if (status >= 500) {
      Message.error('服务器错误')
    }
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    Message.error('操作错误，请重试')
  } else {
    // Something happened in setting up the request that triggered an Error
    Message.error(`请求错误，${error.message}`)
  }
  return Promise.reject(error)
})

export default request
