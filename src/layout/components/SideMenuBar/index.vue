<template>
  <div class="side_bar">
    <Log></Log>
    <el-scrollbar class="scrollbar" wrap-class="scrollbar-wrapper">
      <el-menu router :default-active="activeMenu" active-text-color="red" :collapse="isCollapse">
        <side-item v-for="item in routes" :key="item.path" :subItem="item" :base-path="item.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import SideItem from './SideItem.vue'
import Log from './Log.vue'

import { storeToRefs } from "pinia"
import { useIsCollapseStore } from "@/store/modules/app.ts"

const storeSetup = useIsCollapseStore()
const { isCollapse } = storeToRefs(storeSetup)

const router = useRouter()
const route = useRoute()
const routes = computed(() => {
  return router.options.routes
})
console.log(routes.value);

const activeMenu = computed(() => {
  const { path } = route
  return path
})

</script>

<style lang="scss" scoped>

</style>