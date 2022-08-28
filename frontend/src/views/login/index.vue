<template>
  <el-form
    ref="ruleFormRef"
    :model="loginForm"
    status-icon
    :rules="rules"
    label-width="120px"
    class="login-loginForm"
  >
    <h4 class="title">LOGIN</h4>
    <el-form-item label="UserName" prop="userName">
      <el-input v-model="loginForm.userName" type="text" autocomplete="off" />
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="loginForm.password" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">Submit</el-button>
      <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue'
import { loginEvents } from '@/modules/login'
export default defineComponent({
  name: 'LoginView',
  setup () {
    const {obj, resetForm, submitForm, ruleFormRef } = loginEvents()
    return {
      ...toRefs(obj),
      resetForm,
      submitForm,
      ruleFormRef
    }
  }
})
</script>

<style lang="scss" scoped>
.login-loginForm{
  width:50%;
  max-width:80%;
  padding:30px;
  position: fixed;
  left:50%;
  top:50%;
  z-index: 19;
  transform: translate(-50%, -50%);
  border:1px solid #eee;
  border-radius: 5px;
}
.title {
  text-align: left;
  padding-bottom: 30px;
}
</style>