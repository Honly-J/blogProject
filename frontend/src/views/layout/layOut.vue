<template>
  <el-container>
    <left-side/>
    <el-main>
      <top-header/>
      <main-app/>
    </el-main>
  </el-container>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftSide from './leftSide.vue';
import TopHeader from './header.vue';
import MainApp from './main.vue';

export default defineComponent({
  name: 'Lay-out',
  setup() {
    return {};
  },
  components: {
    LeftSide,
    TopHeader,
    MainApp
  }
});
</script>

<style scoped>
.el-main{
  padding:0 30px;
}
</style>