import { computed, reactive, ref } from "vue"
import type { FormInstance } from 'element-plus'
import { toLgoin } from "@/api/login"
import { useRouter } from "vue-router"
import { message } from "@/utils/common"
import { AxiosResponse } from "axios"
import { getToken, removeToken, setToken } from "@/utils/token"
import { authLoginEnum, authTokenEnum } from "@/enums"
import { useStore } from "vuex"

export function loginEvents() {
  const obj = reactive({
    loginForm: {
      userName: 'admin',
      password: ''
    },
    rules: {
      userName: [
        { required: true, message: '请输入用户名', trigger: 'blur' }
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ]
    }
  })
  const ruleFormRef = ref<FormInstance>()
  const router = useRouter()
  const store = useStore()

  const loginInfo:LoginInfo = computed(() => {
    const authLogin = getToken(authLoginEnum)
    return authLogin && JSON.parse(authLogin)
  }).value

  const submitForm = (formEl: FormInstance) => {
    if (!formEl) return
    formEl.validate(async valid => {
      if (!valid) return
      const res: AxiosResponse = await toLgoin(obj.loginForm)
      if (res.data && res.data?.token) {
        const loginInfo = { ...res.data }
        delete loginInfo.token
        setToken(authLoginEnum, JSON.stringify(loginInfo))
        setToken(authTokenEnum, res.data?.token)
        store.commit('SET_LOGIN_INFO', loginInfo)
        router.push('/dashboard')
      } else {
        message({
          message: res.data,
          type: 'error'
        })
      }
    })
  }
  const toLoginOut = () => {
    removeToken(authLoginEnum)
    removeToken(authTokenEnum)
    router.push('/login')
  }
  const resetForm = (formEl: FormInstance) => {
    if (!formEl) return
    formEl.resetFields()
  }
  return {
    loginInfo,
    toLoginOut,
    resetForm,
    submitForm,
    ruleFormRef,
    obj
  }
}