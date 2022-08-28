
import { ElMessage } from "element-plus";

export function message({ message, type, onClose, duration = 5000}: messageTypes): void {
  ElMessage({
    message,
    type,
    duration,
    onClose
  })
}

// 获取url的参数值
export function getQueryObject(url:string) {
  url = url == null ? window.location.href : url
  const search = url.substring(url.lastIndexOf('?') + 1)
  const obj = Object.create(null)
  const reg = /([^?&=]+)=([^?&=]*)/g
  search.replace(reg, (rs, $1, $2) => {
    const name = decodeURIComponent($1)
    let val = decodeURIComponent($2)
    val = String(val)
    obj[name] = val
    return rs
  })
  return obj
}

