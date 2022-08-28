import http from "@/utils/http";

export function getList(params: articleForm) {
  return http({
    url: '/article/list',
    method: 'get',
    params
  })
}

export function create(data: article) {
  return http({
    url: '/article/create',
    method: 'post',
    data
  })
}
export function update(data: article, params: {id: string}) {
  console.log(params)
  return http({
    url: '/article/update',
    method: 'post',
    data,
    params
  })
}
export function getInfoById(params: { id: string }) {
  return http({
    url: '/article/getOne',
    method: 'get',
    params
  })
}


export function removeOne(params: { articleId: string }) {
  return http({
    url: '/article/remove',
    method: 'get',
    params
  })
}