<template>
  <div>
    <el-button link @click="goback()"><my-icon icon="Back"/>返回</el-button>
    <el-form
      :model="articleForm"
      :rules="rules"
      :disabled="isReadOnly"
      ref="articleFormRef"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="articleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="imgs">
        <el-input v-model="articleForm.imgs"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="sort">
        <el-select v-model="articleForm.sort" placeholder="请选择文字分类">
          <el-option label="技术" value="teclog"></el-option>
          <el-option label="散文" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input type="textarea" v-model="articleForm.content"></el-input>
        <!-- <editor-component /> -->
      </el-form-item>
      <el-form-item>
        <el-button v-if="isCreate" type="primary" @click="submitForm(articleFormRef)">保存</el-button>
        <el-button v-if="isEdit"  type="primary" @click="editForm(articleFormRef)">编辑</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, onMounted, computed } from "vue";
import { createEvent } from "@/modules/article/create";
// import EditorComponent from '@/components/editor.vue'

export default defineComponent({
  name: "Acticle-craete",
  components: {
    // EditorComponent
  },
  setup() {
    const { obj, submitForm, articleFormRef, searchObj, findInfoById, goback, editForm } =
      createEvent();
    const isReadOnly = computed(() => {
      return searchObj.value.oparation === "view";
    });
    const isEdit = computed(() => {
      return searchObj.value.oparation === "edit";
    });
    const isCreate = computed(() => {
      return !searchObj.value.oparation;
    });
    onMounted(async () => {
      console.log("searchObj.value.articleId", searchObj);
      if (isEdit.value || isReadOnly.value) {
        const res = await findInfoById(searchObj.value.articleId);
        const { title, sort, imgs, content } = res.data;
        obj.articleForm = { title, sort, imgs, content };
      }
    });
    return {
      goback,
      isCreate,
      editForm,
      submitForm,
      articleFormRef,
      isReadOnly,
      isEdit,
      ...toRefs(obj),
    };
  },
});
</script>

<style scoped>
</style>