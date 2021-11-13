import requst from '@/utils/request'
import { AxiosPromise } from 'axios'
import qs from 'qs'

export interface User {
  phone: string
  password: string
}

export const login = (data: User):AxiosPromise => {
  return requst({
      method: 'POST',
      url: '/front/user/login',
      data: qs.stringify(data)
  })
}

export const getUserInfo = ():AxiosPromise => {
  return requst({
    method: 'GET',
    url: '/front/user/getInfo'
  })
}
