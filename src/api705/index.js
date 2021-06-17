import request from '@/utils705/request'

export function getList (offset, limit) {
  return request({
    url: `/mv/first?offset=${offset}&limit=${limit}`,
    method: 'get'
  })
}

export function getSameList (id) {
  return request({
    url: `/simi/mv?mvid=${id}`,
    method: 'get'
  })
}

export function getRecommendList () {
  return request({
    url: '/personalized/mv',
    method: 'get'
  })
}

export function getDetail (id) {
  return request({
    url: `/mv/detail?mvid=${id}`,
    method: 'get'
  })
}

export function getComment (id, offset, limit) {
  return request({
    url: `/comment/mv?id=${id}&offset=${offset}&limit=${limit}`,
    method: 'get'
  })
}

export function getMv (id) {
  return request({
    url: `/mv/url?id=${id}`,
    method: 'get'
  })
}

export function search (context, type) {
  return request({
    url: `/search?keywords=${context}&type=${type}`,
    method: 'get'
  })
}
