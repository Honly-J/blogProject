<template>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="['1']">
      <template v-for="(item, index) in allRoutes" :key="item.path">
        <template v-if="!item.hidden">
          <template v-if="item.children?.length === 1">
            <router-link :to="item.children[0].path" :index="'menu_' + index" >
              <el-menu-item :index="item.path + `/index`">
                <my-icon :icon="item.children[0].meta.icon" />
                {{ item.children[0].meta.title }}
              </el-menu-item>
            </router-link>
          </template>
          <el-sub-menu v-if="item.children?.length > 1" :index="'menu_' + index">
            <template #title>
              <!-- <i class="iconfont" :class="item.meta.icon"></i> -->
              <my-icon :icon="item.meta.icon" />
              <span>{{ item.meta.title }}</span>
            </template>
            <el-menu-item-group
              v-for="child in item.children"
              :key="child.path">
              <router-link :to="child.path" >
                <el-menu-item :index="item.path + `/` + child.path">
                  <my-icon :icon="child.meta.icon" />
                  {{ child.meta.title }}
                </el-menu-item>
              </router-link>
            </el-menu-item-group>
          </el-sub-menu>
        </template>
      </template>
    </el-menu>
  </el-aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "LeftSide",
  setup() {
    const allRoutes = useRouter().options.routes;
    return {
      allRoutes,
    };
  },
});
</script>

<style scoped>
</style>