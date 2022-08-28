import { create, getInfoById, update } from "@/api/article"
import { getQueryObject, message } from "@/utils/common"
import { FormInstance } from "element-plus"
import { computed, reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { loginEvents } from "../login"

export function createEvent() {
  const obj = reactive({
    articleForm: {
      title: '',
      sort: '',
      imgs: '',
      content: ''
    },
    rules: {
      title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
      sort: [{ required: true, message: '请选择分类', trigger: 'blur' }],
      imgs: [{ required: true, message: '请上传图片' , trigger: 'blur'}],
      content: [{ required: true, message: '请输入文章' , trigger: 'blur'}]
    }
  })
  const searchObj = computed(() => {
    return getQueryObject(location.hash)
  })
  const router = useRouter()
  const articleFormRef = ref<FormInstance>()
  const submitForm = (formEl: FormInstance) => {
    formEl.validate((valid: boolean) => {
      if (!valid) return
      createArticle()
    })
  }
  const editForm = (formEl: FormInstance) => {
    formEl.validate((valid: boolean) => {
      if (!valid) return
      updateArticle()
    })
  }
  const { loginInfo } = loginEvents()
  const createArticle = async () => {
    const res = await create({ ...obj.articleForm, author: loginInfo.userName })
    if (res) {
      message({
        message: '添加成功',
        type: 'success',
        onClose: () => {
          router.push('/article/list')
        }
      })
    }
  }
  const updateArticle = async () => {
    console.log('updateArticle==>', searchObj)
    const res = await update({ ...obj.articleForm, author: loginInfo.userName }, {id: searchObj.value.articleId})
    if (res) {
      message({
        message: '更新成功',
        type: 'success',
        onClose: () => {
          router.push('/article/list')
        }
      })
    }
  }
  const findInfoById = async (id:string) => {
    return await getInfoById({ id })
  }
  const goback = () => {
    router.back()
  }
  return {
    obj,
    searchObj,
    goback,
    findInfoById,
    submitForm,
    editForm,
    articleFormRef,
    createArticle
  }
}