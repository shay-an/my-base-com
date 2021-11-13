import axios, { AxiosRequestConfig } from 'axios'
import store from '../store/index'

const request = axios.create({
})

request.interceptors.request.use(function (config: AxiosRequestConfig) {
  if (store.state.user) {
    config.headers = { Authorization: store.state.user.access_token }
  }
  return config
})

export default request
