<template>
  <div>
    <div class="block">
      <el-form :inline="true" :model="searchForm" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input v-model="searchForm.title" placeholder="标题"></el-input>
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="searchForm.author" placeholder="作者"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="searchForm.status" placeholder="状态">
            <el-option label="草稿" value="000"></el-option>
            <el-option label="已发布" value="0001"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit()">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-table :data="articleList" stripe style="width: 100%">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="sort" label="分类" width="80"></el-table-column>
      <el-table-column prop="createTime" label="创建时间"></el-table-column>
      <el-table-column prop="updateTime" label="更新时间"></el-table-column>
      <el-table-column label="操作" width="150">
        <template #default="scope">
        <el-button-group>
          <el-button @click="oparation(scope.row._id, 'view')" link  size="small" title="查看"><my-icon icon="View" /></el-button>
          <el-button @click="oparation(scope.row._id, 'edit')"  link  size="small" title="编辑"><my-icon icon="Edit" /></el-button>
          <el-popconfirm title="Are you sure to delete this?" @confirm="oparation(scope.row._id, 'remove')">
            <template #reference>
              <el-button   link  size="small" title="删除"><my-icon icon="Delete" /></el-button>
            </template>
          </el-popconfirm>
        </el-button-group>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :total="total"
      @currentChange="currentChange"></el-pagination>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRefs } from 'vue'
import { listEvent } from '@/modules/article/list'

export default defineComponent({
  name: 'Acticle-list',
  setup () {
    const { obj, search, currentChange, oparation } = listEvent()
    const onSubmit = () => {
      search()
    }
    onMounted(() => [
      search()
    ])
    return {
      ...toRefs(obj),
      onSubmit,
      oparation,
      currentChange
    }
  }
})
</script>

<style scoped>

</style>