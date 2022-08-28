type MyType = {
  age?: number
  name?: string
}


type ResponseDataType = {
  code: string,
  data?: object | boolean | object[] | null,
  message: string
}

type RouterExtendType = {
  hidden?: boolean
}

interface FetchApiParams {
  url: string,
  method: 'get' | 'post'
  params?: object,
  data?: object
}


interface messageTypes  {
  message: string
  type: "success" | "warning" | "info" | "error" | undefined
  duration?: number
  onClose?: function
}
type ArticleStatus = '000' | '001' | ''

interface articleForm {
  title: string
  author: string,
  status: ArticleStatus
  pageSize: number,
  pageNo: number
}

interface article {
  title: string
  sort: string
  imgs: string
  content: string
  status?: ArticleStatus
  author?: string
  createTime?: string
  updateTime?: string
}


interface LoginInfo {
  id: string
  role: string
  userName: string
  token?: string
}

type oparationType = 'view' | 'edit' | 'remove' | 'create'
