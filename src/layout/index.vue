<script setup lang="ts">
import SlideMenuBar from '@/layout/components/SideMenuBar/index.vue'
import AppMain from '@/layout/components/AppMain.vue'
import NavBar from '@/layout/components/NavigationBar.vue'
import { storeToRefs } from "pinia"
import { useIsCollapseStore } from "@/store/modules/app.ts"

const storeSetup = useIsCollapseStore()
const { isCollapse } = storeToRefs(storeSetup)

</script>
<template>
  <div class="app_main">
    <!-- 侧边菜单栏 -->
    <SlideMenuBar class="sidebar-container" :class="{ 'hideSidebar': isCollapse }" />
    <!-- 内容区域 -->
    <div class="main_container" :class="{ 'hideMainContainer': isCollapse }">
      <NavBar />
      <AppMain />
    </div>
  </div>
</template>


<style lang="scss" scoped>
.app_main {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: row;

  .main_container {
    width: 100%;
    min-height: 100%;
    transition: margin-left 0.28s;
    margin-left: 200px;
    position: relative;
  }

  .hideMainContainer {
    margin-left: 54px !important;
  }
}
</style>