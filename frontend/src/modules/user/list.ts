import { reactive } from "vue";
import { getUsers } from "@/api/user";

export default function list() {
  const obj = reactive({})
  const getUserInfos = async () => {
    const res = await getUsers()
    return res.data
  }
  const toEdit = () => {
    console.log('editor')
  }
  return {
    toEdit,
    getUserInfos,
    obj
  }
}