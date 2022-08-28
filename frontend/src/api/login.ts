import http from "@/utils/http";

export function toLgoin(data?: object) {
  return http({
    // url: '/login/checkLogin',
    url: '/auth/login',
    method: 'post',
    data
  })
}

