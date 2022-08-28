import http from "@/utils/http";

export function getUsers(params?: object) {
  return http({
    url: '/users/getAll',
    method: 'get',
    params
  })
}
