import requst from '@/utils/request'
import { AxiosPromise } from 'axios'

export interface Menu {
  id?: number
  parentId?: number
  name?: string
  herf?: string
  icon?: string
  orderNum?: number
  description?: string
  shown?: boolean
}

export const saveOrUpdate = (data: Menu):AxiosPromise => {
  return requst({
    method: 'POST',
    url: '/boss/menu/saveOrUpdate',
    data: data
  })
}

export const getAll = ():AxiosPromise => {
  return requst({
    method: 'GET',
    url: '/boss/menu/getAll'
  })
}

export const getEditMenuInfo = (id = -1):AxiosPromise => {
  return requst({
    method: 'GET',
    url: '/boss/menu/getEditMenuInfo',
    params: {
      id: id
    }
  })
}
