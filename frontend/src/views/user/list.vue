<template>
  <div>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="age" label="Date" width="180" />
      <el-table-column prop="breed" label="Address" />
      <el-table-column label="操作" >
        <template #default="scope">
          <my-icon icon="edit" @click="toEdit(scope.row, scope.$index)"/>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, reactive, toRefs } from "vue";
import listEvent from '@/modules/user/list';

export default defineComponent({
  name: "UserList",
  setup() {
    const obj = reactive({
      tableData: []
    })
    const { getUserInfos, toEdit } = listEvent()
    onBeforeMount(async () => {
      const res = await getUserInfos()
      obj.tableData = res
    })
  
    return {
      toEdit,
      ...toRefs(obj)
    };
  },
});
</script>

<style scoped>
</style>