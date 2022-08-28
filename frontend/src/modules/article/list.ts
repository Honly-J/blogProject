import { reactive } from "vue"
import { getList, removeOne } from '@/api/article'
import { OPRATION_ENUMS } from "@/enums"
import { useRouter } from "vue-router"
import { message } from "@/utils/common"

export function listEvent() {
  const obj = reactive({
    searchForm: {
      title: '',
      author: '',
      status: '',
    } as articleForm,
    pageSize: 10,
    pageNo: 1,
    total: 0,
    articleList: []
  })
  const router = useRouter()
  const getArticleList = async () => {
    const res = await getList({ ...obj.searchForm, pageSize: obj.pageSize, pageNo: obj.pageNo })
    if (res?.data) {
      obj.total = res.data.count
      obj.articleList = res.data.dataList
    }
  }
  const search = async () => {
    obj.pageNo = 1
    getArticleList()
  }
  const currentChange = async (val: number) => {
    obj.pageNo = val
    getArticleList()
  }
  const removeArticle = async (articleId: string) => {
    const res = await removeOne({ articleId })
    if (res.data === true) {
      message({
        message: '删除成功',
        type: 'success',
        onClose: () => {
          search()
        },
        duration: 3000
      })
    }
  }
  const toViewPage = (articleId: string, oparation: oparationType) => {
    router.push({
      path: '/article/create',
      query: {
        articleId,
        oparation
      }
    });
  }

  const oparation = (articleId: string, oparation: oparationType) => {
    console.log(articleId, oparation)
    switch(oparation) {
      case (OPRATION_ENUMS.VIEW) :
        toViewPage(articleId, oparation)
        break;
      case (OPRATION_ENUMS.EDITE) :
        toViewPage(articleId, oparation)
        break;
      case (OPRATION_ENUMS.REMOVE) :
        removeArticle(articleId)
        break;
    }
  }
  return {
    obj,
    search,
    oparation,
    currentChange,
    getArticleList
  }
}