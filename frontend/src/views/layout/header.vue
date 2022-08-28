<template>
  <el-header class="layout-header">
    <el-dropdown>
      <span class="el-dropdown-link">
        <span><my-icon icon="User"/> {{ loginInfo.userName }} </span>
        <my-icon icon="arrow-down"/>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="toLoginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { loginEvents } from '@/modules/login'

export default defineComponent({
  name: 'Layout-header',
  setup () {
    const { toLoginOut, loginInfo } = loginEvents()
    return {
      loginInfo,
      toLoginOut
    }
  }
})
</script>

<style lang="scss" scoped>
.layout-header {
  border-bottom:1px solid rgb(208, 208, 208);
  margin-bottom: 10px;
  text-align: right;
  height: 40px;
  line-height:40px;
  padding:10px 0;
}
</style>
