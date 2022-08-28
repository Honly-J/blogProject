<template>
  <component :is="componentId" class="el-icon"></component>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'icon-component',
  props: {
    icon: {
      type: String,
      default: 'edit'
    }
  },
  setup (props: { icon: string }) {
    const componentId = ref('el-icon-' + props.icon)
    return {
      componentId
    }
  }
})
</script>

<style scoped>

</style>