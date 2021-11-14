import requst from '@/utils/request'
import { AxiosPromise } from 'axios'
import { BossData } from './boss-data'

export interface ResouceQuery {
  categoryId?: null | number
  current: number
  name: string
  size: number
  url: string
}

export interface Resouce {
  categoryId: number
  createdBy: string
  createdTime: string
  description: string
  id: number
  name: string
  operatorId: null | number
  selected: false
  updatedBy: string
  updatedTime: string
  url: string
}

interface records {
  current: number
  hitCount: boolean
  optimizeCountSql: boolean
  orders: []
  pages: number
  records: Resouce[]
}

export const getResourcePages = (data:ResouceQuery):AxiosPromise<BossData<records>> => {
  return requst({
    method: 'POST',
    url: '/boss/resource/getResourcePages',
    data: data
  })
}
