import request from '@/utils/request'
import { AxiosPromise } from 'axios'

export interface Role {
  id?: number | null
  code: string
  description: string
  name: string
}

export interface GetRoleData {
  current: number
  name: string
  size: number
}

export const saveOrUpdate = (data:Role):AxiosPromise => {
  return request({
    method: 'POST',
    url: '/boss/role/saveOrUpdate',
    data: data
  })
}

export const getRolePages = (data:GetRoleData):AxiosPromise => {
  return request({
    method: 'post',
    url: '/boss/role/getRolePages',
    data
  })
}

export const getRow = (id:string | number):AxiosPromise => {
  return request({
    method: 'GET',
    url: `/boss/role/${id}`
  })
}

export const getRoleMenus = (id:string | number):AxiosPromise => {
  return request({
    method: 'GET',
    url: '/boss/menu/getRoleMenus',
    params: {
      roleId: id
    }
  })
}

export const allocateRoleMenus = (data:any):AxiosPromise => {
  return request({
    method: 'POST',
    url: '/boss/menu/allocateRoleMenus',
    data
  })
}
