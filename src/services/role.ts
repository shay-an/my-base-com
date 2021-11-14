import requst from '@/utils/request'
import { AxiosPromise } from 'axios'
import { BossData } from './boss-data'

export interface Role {
  id?: number | null
  code: string
  description: string
  name: string
}

export const saveOrUpdate = (data:Role):AxiosPromise => {
  return requst({
    method: 'POST',
    url: '/boss/role/saveOrUpdate',
    data: data
  })
}
