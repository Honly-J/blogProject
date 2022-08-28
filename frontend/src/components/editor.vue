<template>
  <div class="edit_container">
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @textChange="onEditorChange()"
    ></quill-editor>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue';

import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default defineComponent({
  name: 'Quill-editor-component',
  components: {
    QuillEditor
  },
  setup() {
    const obj = reactive({
      content:  '',
      editorOption: {}
    })
    const myQuillEditor = ref()
    const editor = computed(() => {
      return myQuillEditor.value.quill
    })
    const onEditorChange = () => {
      // 内容改变事件
      console.log(arguments)
    }
    return {
      ...toRefs(obj),
      editor,
      onEditorChange
    };
  }
})
</script>